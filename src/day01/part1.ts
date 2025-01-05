// Advent of Code - Day 1 - Part One

export function part1(input: string): number {
  const lines = input.trim().split('\n');
  const firstList: number[] = [];
  const secondList: number[] = [];
  let totalDistance: number = 0;
  lines.forEach((line) => {
    const [x, y] = line.split(/\s+/).map(Number);
    firstList.push(x);
    secondList.push(y);
  });
  firstList.sort();
  secondList.sort();
  for (let i = 0; i < lines.length; i++) {
    totalDistance += Math.abs(firstList[i] - secondList[i]);
  }
  return totalDistance;
}
