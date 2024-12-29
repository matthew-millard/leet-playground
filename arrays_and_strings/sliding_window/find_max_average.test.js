import { describe, test, expect } from "vitest";
import { findMaxAverage } from "./find_max_average";

describe("Maximum Average Subarray", () => {
  test("returns the maximum average of a subarray", () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBe(12.75);
  });

  test("handles a single-element array with a constraint of 1", () => {
    expect(findMaxAverage([5], 1)).toBe(5);
  });

  test("throws on empty input array", () => {
    expect(() => findMaxAverage([], 12)).toThrowError("Invalid input");
  });

  test("throws on k being greater than input array length", () => {
    expect(() => findMaxAverage([1, 4, 8], 8)).toThrowError("Invalid input");
  });

  test("handles a single-element array with a negative integer", () => {
    expect(findMaxAverage([-1], 1)).toBe(-1);
  });

  // test("handles all negative numbers in the array", () => {
  //   expect(findMaxAverage([-2, -3, -4, -1, -5], 2)).toBe(-1.5);
  // });

  test("handles when k equals the length of the array", () => {
    expect(findMaxAverage([1, 2, 3, 4], 4)).toBe(2.5);
  });
});
