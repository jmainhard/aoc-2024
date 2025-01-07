// Advent of Code - Day 2 - Part Two (With help)

import { isSafe } from './part1.js';

export function part2(input: string): number {
  const reports = input.trim().split('\n');
  let safeReports = 0;
  reports.forEach((report) => {
    const reportLevels = report.split(/\s+/).map(Number);
    if (isSafe(reportLevels)) {
      safeReports++;
    } else {
      for (let i = 0; i < reportLevels.length; i++) {
        const trimmedReport = reportLevels.slice();
        trimmedReport.splice(i, 1);
        if (isSafe(trimmedReport)) {
          safeReports++;
          return;
        }
      }
    }
  });
  return safeReports;
}
