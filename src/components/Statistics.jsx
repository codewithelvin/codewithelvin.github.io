import { Fragment } from "react";
import stats from "../data/stats.json";

export default function Statistics() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1">
      <span className="text-sm text-muted text-gray-650">
        Books: {stats.booksRead}
      </span>
      <span className="text-sm text-muted text-gray-650">✦</span>
      <span className="text-sm text-muted text-gray-650">
        LeetCode: {stats.leetCode}
      </span>
    </div>
  );
}
