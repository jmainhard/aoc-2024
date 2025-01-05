// Advent of Code - Day 1 - Part One

export function part1(input: string): number {
  const lines = input.trim().split('\n');
  const a: number[] = [];
  const b: number[] = [];
  let totalDistance: number = 0;
  lines.forEach((line) => {
    const [x, y] = line.split(/\s+/).map(Number);
    a.push(x);
    b.push(y);
  });
  a.sort();
  b.sort();
  for (let i = 0; i < lines.length; i++) {
    totalDistance += Math.abs(a[i] - b[i]);
  }
  return totalDistance;
}
