import { describe, expect, test } from "vitest";
import { countSubarraysWithProductLessThanConstraint, findLongestSubarray } from "./sliding_window";

describe("Sliding Window", () => {
  describe("findLongestSubarray", () => {
    test("returns the length of the longest subarray with a sum less than or equal to the constraint", () => {
      expect(findLongestSubarray([3, 2, 1, 3, 1, 1], 5)).toBe(3);
    });

    test("returns 0 for an empty array", () => {
      expect(findLongestSubarray([], 5)).toBe(0);
    });

    test("returns 1 for a single-element array that satisfies the constraint", () => {
      expect(findLongestSubarray([4], 5)).toBe(1);
    });

    test("returns 0 for a single-element array that does not satisfy the constraint", () => {
      expect(findLongestSubarray([6], 5)).toBe(0);
    });

    test("returns the length of the entire array if the sum of all elements satisfies the constraint", () => {
      expect(findLongestSubarray([1, 1, 1, 1], 5)).toBe(4);
    });

    test("returns 0 if no subarray satisfies the constraint", () => {
      expect(findLongestSubarray([10, 20, 30], 5)).toBe(0);
    });
  });

  describe("countSubarraysWithProductLessThanConstraint", () => {
    test("returns the number of subarrays with a product less than the contraint", () => {
      expect(countSubarraysWithProductLessThanConstraint([10, 5, 2, 6], 100)).toBe(8);
    });

    test("returns 0 for a single-element array that does not satisfy the contraint", () => {
      expect(countSubarraysWithProductLessThanConstraint([150], 100)).toBe(0);
    });
  });
});
