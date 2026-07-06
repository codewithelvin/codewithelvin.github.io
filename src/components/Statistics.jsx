import { Fragment } from "react";
import stats from "../data/stats.json";
import { BookIcon, CodeIcon } from "./Icons";

export default function Statistics() {
  return (
    <div className="flex sm:flex-row sm:items-center gap-2 mt-1">
      <span className="text-sm text-muted text-gray-650 flex items-center gap-1">
        <BookIcon className="sm:hidden" />
        <span className="hidden sm:inline">Books:</span>
        <span>{stats.booksRead}</span>
      </span>
      <span className="text-sm text-muted text-gray-650">✦</span>
      <span className="text-sm text-muted text-gray-650 flex items-center gap-1">
        <CodeIcon className="sm:hidden" />
        <span className="hidden sm:inline">LeetCode:</span>
        <span>{stats.leetCode}</span>
      </span>
    </div>
  );
}
