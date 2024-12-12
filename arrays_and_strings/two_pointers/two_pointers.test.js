import { describe, expect, test } from 'vitest';
import { getMiddleValueOfArray } from './two_pointers.js';

describe('Two Pointers', () => {
  describe('given an array of integers, find the value in the middle', () => {
    test('of an odd array', () => {
      expect(getMiddleValueOfArray([1, 4, 3, 24, 5, 0, 5])).toBe(24);
    });

    test('of an even array', () => {
      expect(getMiddleValueOfArray([1, 4, 3, 24, 5, 0])).toBe(3);
    });

    test('of an array with one element', () => {
      expect(getMiddleValueOfArray([1])).toBe(1);
    });

    test('of an array with zero elements', () => {
      expect(getMiddleValueOfArray([])).toBeUndefined();
    });
  });
});
