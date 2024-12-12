import { describe, expect, test } from 'vitest';
import { combine, isPalindrome, isSubsequence, reverse, sortedTwoSum } from './two_pointers.js';

describe('Two Pointers', () => {
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

  describe('isSubsequence', () => {
    test('returns true when the first string is a subsequence of the second string', () => {
      expect(isSubsequence('ace', 'abcde')).toBe(true);
    });

    test('returns false when the first string is not a subsequence of the second string', () => {
      expect(isSubsequence('aec', 'abcde')).toBe(false);
    });

    test('returns true for an empty first string', () => {
      expect(isSubsequence('', 'abcde')).toBe(true);
    });

    test('returns false when the second string is empty but the first is not', () => {
      expect(isSubsequence('a', '')).toBe(false);
    });

    test('returns true when both strings are empty', () => {
      expect(isSubsequence('', '')).toBe(true);
    });

    test('returns true when the first string is a single character present in the second string', () => {
      expect(isSubsequence('a', 'abcde')).toBe(true);
    });

    test('returns false when the first string is a single character not present in the second string', () => {
      expect(isSubsequence('z', 'abcde')).toBe(false);
    });
  });

  describe('reverse', () => {
    test('reverses an odd-length array', () => {
      expect(reverse(['h', 'e', 'l', 'l', 'o'])).toEqual(['o', 'l', 'l', 'e', 'h']);
    });

    test('reverses an even-length array', () => {
      expect(reverse(['f', 'r', 'i', 'e', 'n', 'd'])).toEqual(['d', 'n', 'e', 'i', 'r', 'f']);
    });

    test('returns an empty array when given an empty array', () => {
      expect(reverse([])).toEqual([]);
    });

    test('returns the same array when given a single-element array', () => {
      expect(reverse(['a'])).toEqual(['a']);
    });
  });
});
