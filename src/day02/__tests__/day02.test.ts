// Advent of Code - Day 2

import { beforeAll, describe, expect, test } from 'vitest';
import { part1 } from '../part1.js';
import { part2 } from '../part2.js';
import { readFile } from 'fs/promises';

describe('Day 2', () => {
  let input: string;
  
  beforeAll(async () => {
    input = await readFile(
      'src/day02/__tests__/day02.sample.txt',
      'utf8',
    );
  });

  test('Part 1', () => {
    expect(part1(input)).toBe(2);
  });

  test('Part 2', () => {
    expect(part2(input)).toBe(4);
  });
});
