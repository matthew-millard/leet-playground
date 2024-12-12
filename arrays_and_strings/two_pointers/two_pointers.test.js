import { describe, expect, test } from 'vitest';
import { getMiddleValueOfArray, isPalindrome } from './two_pointers.js';

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

  describe('given a string, find out if it is a palindrome', () => {
    test('given a palindrome, it should return true', () => {
      expect(isPalindrome('racecar')).toBeTruthy();
    });

    test('given a string that is not a palindrome, it should return false', () => {
      expect(isPalindrome('crocodile')).toBeFalsy();
    });

    test('given a value that is not the typeof string, it should return false', () => {
      expect(isPalindrome(232)).toBeFalsy();
    });

    test('given a empty string, it should return false', () => {
      expect(isPalindrome('')).toBeFalsy();
    });

    test('given an empty string with spaces, it should return false', () => {
      expect(isPalindrome('  ')).toBeFalsy();
    });
  });
});
