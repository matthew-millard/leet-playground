import { describe, expect, test } from 'vitest';
import { combine, findMiddleValue, isPalindrome, sortedTwoSum } from './two_pointers.js';

describe('Two Pointers', () => {
  describe('findMiddleValue', () => {
    test('returns the middle value of an odd-length array', () => {
      expect(findMiddleValue([1, 4, 3, 24, 5, 0, 5])).toBe(24);
    });

    test('returns the lower middle value of an even-length array', () => {
      expect(findMiddleValue([1, 4, 3, 24, 5, 0])).toBe(3);
    });

    test('returns the only element when the array has one element', () => {
      expect(findMiddleValue([1])).toBe(1);
    });

    test('returns undefined when the array is empty', () => {
      expect(findMiddleValue([])).toBeUndefined();
    });
  });

  describe('isPalindrome', () => {
    test('returns true for a palindrome string', () => {
      expect(isPalindrome('racecar')).toBeTruthy();
    });

    test('returns false for a non-palindrome string', () => {
      expect(isPalindrome('crocodile')).toBeFalsy();
    });

    test('returns false for a non-string value', () => {
      expect(isPalindrome(232)).toBeFalsy();
    });

    test('returns false for an empty string', () => {
      expect(isPalindrome('')).toBeFalsy();
    });

    test('returns false for a string with only spaces', () => {
      expect(isPalindrome('  ')).toBeFalsy();
    });
  });

  describe('sortedTwoSum', () => {
    test('returns true when a pair of integers sums to the target', () => {
      expect(sortedTwoSum([1, 2, 4, 6, 8, 9, 14, 15], 13)).toBeTruthy();
    });

    test('returns false when no pair of integers sums to the target', () => {
      expect(sortedTwoSum([1, 2, 4, 6, 8, 9, 14, 15], 40)).toBeFalsy();
    });
  });

  describe('combine', () => {
    test('returns a new array that is sorted', () => {
      expect(combine([1, 4, 7, 20], [3, 5, 6])).toEqual([1, 3, 4, 5, 6, 7, 20]);
    });
  });
});
