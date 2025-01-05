// Advent of Code - Day 1 - Part Two

/**
 * group by number on a map of numbers. Modifies the passed map
 *
 */
function groupBy(grouping: number, map: Map<number, number>) {
  let exists = map.get(grouping);
  if (!exists) map.set(grouping, 1);
  if (exists) {
    map.set(grouping, ++exists);
  }
}

export function part2(input: string): number {
  const lines = input.trim().split('\n');
  const groupByOccurence = new Map<number, number>();
  const locationIds: number[] = [];
  let similarityScore: number = 0;
  lines.forEach((line) => {
    const [x, y] = line.split(/\s+/).map(Number);
    locationIds.push(x);
    groupBy(y, groupByOccurence);
  });

  // calculate similarity
  for (let i = 0; i < lines.length; i++) {
    const currentNumber = locationIds[i];
    const occurence = groupByOccurence.get(currentNumber);
    if (occurence) {
      similarityScore += currentNumber * occurence;
    }
  }
  return similarityScore;
}
