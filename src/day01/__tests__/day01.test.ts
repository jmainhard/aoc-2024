// Advent of Code - Day 1

import { beforeAll, describe, expect, test } from 'vitest';
import { part1 } from '../part1.js';
import { part2 } from '../part2.js';
import { readFile } from 'fs/promises';

describe('Day 1', () => {
  let input: string;
  beforeAll(async () => {
    input = await readFile(
      'src/day01/__tests__/day01.sample.txt',
      'utf8',
    );
  });

  test('Part 1', () => {
    expect(part1(input)).toBe(11);
  });

  test('Part 2', () => {
    expect(part2('')).toBe(0);
  });
});
