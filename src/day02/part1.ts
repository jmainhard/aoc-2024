// Advent of Code - Day 2 - Part One

function isIncreasing(report: number[]) {
  return report[0] < report[1];
}

function isSafe(reportLevels: number[]) {
  const increasing = isIncreasing(reportLevels);
  const decreasing = !increasing;
  for (let index = 0; index < reportLevels.length - 1; index++) {
    const level = reportLevels[index];
    const nextLevel = reportLevels[index + 1];
    const isIncreasing = level < nextLevel;
    const isDecreasing = level > nextLevel;

    // The levels are either all increasing or all decreasing.
    if ((increasing && !isIncreasing) || (decreasing && !isDecreasing)) {
      return false;
    }

    // Any two adjacent levels differ by at least one and at most three.
    const differ = Math.abs(level - nextLevel);
    if (differ < 1 || differ > 3) {
      return false;
    }
  }
  return true;
}

export function part1(input: string): number {
  const reports = input.trim().split('\n');
  let safeReports = 0;
  reports.forEach((report) => {
    const reportLevels = report.split(/\s+/).map(Number);
    if (isSafe(reportLevels)) safeReports++;
  });
  return safeReports;
}
