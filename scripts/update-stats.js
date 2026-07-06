#!/usr/bin/env node
import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const ROOT = process.cwd();
const STATS_FILE = path.join(ROOT, "src", "data", "stats.json");

function parseArgs() {
  const args = process.argv.slice(2);
  const result = {};

  for (let i = 0; i < args.length; i += 1) {
    const arg = args[i];
    if (arg === "--goodreads" || arg === "-g") {
      result.goodreads = args[i + 1];
      i += 1;
    } else if (arg === "--leetcode" || arg === "-l") {
      result.leetcode = args[i + 1];
      i += 1;
    } else if (arg === "--help" || arg === "-h") {
      result.help = true;
    }
  }

  return result;
}

function usage() {
  console.log(`Usage: node scripts/update-stats.js [options]

Options:
  --goodreads, -g  Goodreads profile URL or user identifier
  --leetcode, -l   LeetCode username
  --help, -h       Show this help message

Environment variables are also supported:
  GOODREADS_URL
  LEETCODE_USER
`);
}

async function fetchGoodreadsBooksRead(urlOrId) {
  if (!urlOrId) {
    throw new Error("Missing Goodreads profile URL or identifier.");
  }

  let profileUrl;
  try {
    profileUrl = new URL(urlOrId);
  } catch (error) {
    profileUrl = new URL(
      `https://www.goodreads.com/user/show/${encodeURIComponent(urlOrId)}`,
    );
  }

  const response = await fetch(profileUrl.href, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Node.js)",
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch Goodreads profile: ${response.status} ${response.statusText}`,
    );
  }

  const html = await response.text();
  const patterns = [
    /<a[^>]+href=["']\/review\/list\/[\d]+\?shelf=read["'][^>]*>[^<]*read[^\d]*(?:\(\s*([\d,]+)\s*\))?/i,
    /<a[^>]+href=["']\/review\/list\/[\d]+\?shelf=read["'][^>]*>[\s\S]*?\((\s*[\d,]+\s*)\)/i,
    /<title>[^<]*(\d[\d,]*)\s+books\s*<\/title>/i,
    /<meta[^>]+name=["']description["'][^>]*content=["'][^"']*?(\d[\d,]*)\s+books\s+on\s+Goodreads[^"']*["']/i,
    /<meta[^>]+property=["']og:description["'][^>]*content=["'][^"']*?(\d[\d,]*)\s+books\s+on\s+Goodreads[^"']*["']/i,
    /has\s+(\d[\d,]*)\s+books\s+on\s+Goodreads/i,
    /(\d[\d,]*)\s+books\s+on\s+Goodreads/i,
    /([\d,]+)\s+books\s+read/i,
    /Read[^\d\n]*([\d,]+)/i,
  ];

  for (const pattern of patterns) {
    const match = html.match(pattern);
    if (match?.[1]) {
      return Number(match[1].replace(/,/g, ""));
    }
  }

  throw new Error(
    `Unable to find the Goodreads books-read count on the profile page. Final URL: ${response.url}`,
  );
}

async function fetchLeetCodeSolvedCount(username) {
  if (!username) {
    throw new Error("Missing LeetCode username.");
  }

  const query = `query userProfile($username: String!) { matchedUser(username: $username) { submitStats { acSubmissionNum { difficulty count } } } }`;
  const response = await fetch("https://leetcode.com/graphql/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "Mozilla/5.0 (Node.js)",
    },
    body: JSON.stringify({ query, variables: { username } }),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch LeetCode profile: ${response.status} ${response.statusText}`,
    );
  }

  const data = await response.json();
  const counts = data?.data?.matchedUser?.submitStats?.acSubmissionNum;
  const allCount = Array.isArray(counts)
    ? counts.find((item) => item.difficulty === "All")?.count
    : undefined;

  if (typeof allCount !== "number") {
    throw new Error(
      "Unable to read solved problem count from LeetCode response.",
    );
  }

  return allCount;
}

async function updateStats(goodreadsUrl, leetcodeUsername) {
  const current = JSON.parse(await fs.readFile(STATS_FILE, "utf8"));
  const next = { ...current };

  if (goodreadsUrl) {
    console.log(`Fetching Goodreads books-read count from ${goodreadsUrl}...`);
    next.booksRead = await fetchGoodreadsBooksRead(goodreadsUrl);
  }

  if (leetcodeUsername) {
    console.log(`Fetching LeetCode solved count for ${leetcodeUsername}...`);
    next.leetCode = await fetchLeetCodeSolvedCount(leetcodeUsername);
  }

  await fs.writeFile(STATS_FILE, JSON.stringify(next, null, 2) + "\n", "utf8");
  console.log(`Updated ${path.relative(ROOT, STATS_FILE)} successfully.`);
  console.log(`New stats: ${JSON.stringify(next)}`);
}

async function main() {
  const args = parseArgs();

  if (args.help) {
    usage();
    process.exit(0);
  }

  const goodreadsUrl = args.goodreads || process.env.GOODREADS_URL;
  const leetcodeUser = args.leetcode || process.env.LEETCODE_USER;

  if (!goodreadsUrl && !leetcodeUser) {
    usage();
    throw new Error("Please provide Goodreads and/or LeetCode credentials.");
  }

  await updateStats(goodreadsUrl, leetcodeUser);
}

main().catch((error) => {
  console.error("Error:", error.message || error);
  process.exit(1);
});
