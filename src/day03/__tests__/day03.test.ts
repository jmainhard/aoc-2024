// Advent of Code - Day 3

import { beforeAll, describe, expect, test } from 'vitest';
import { part1 } from '../part1.js';
import { part2 } from '../part2.js';
import { readFile } from 'fs/promises';

describe('Day 3', () => {
  let input: string;

  beforeAll(async () => {
    input = await readFile('src/day03/__tests__/day03.sample.txt', 'utf8');
  });

  test('Part 1', () => {
    expect(part1(input)).toBe(161);
  });

  test('Part 2', () => {
    expect(part2('')).toBe(0);
  });
});
