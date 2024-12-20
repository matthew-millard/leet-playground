import { describe, test, expect } from "vitest";
import { getSumOfArrayAfterElementsDoubled, selectionSort } from "./selection_sort";

describe("Selection Sort", () => {
  test("returns an array in ascending order", () => {
    expect(selectionSort([4, 2, 7, 1, 3])).toEqual([1, 2, 3, 4, 7]);
  });

  test("handles a single-element array", () => {
    expect(selectionSort([3])).toEqual([3]);
  });

  test("handles negative integars in an array", () => {
    expect(selectionSort([-12, 4, -56, 3, 5])).toEqual([-56, -12, 3, 4, 5]);
  });

  test("handles a empty array", () => {
    expect(selectionSort([])).toEqual([]);
  });
});

describe("Double Numbers", () => {
  test("returns the sum of an array after the number have been doubled", () => {
    expect(getSumOfArrayAfterElementsDoubled([1, 2, 3, 4, 5])).toBe(30);
  });

  test("handle given a single-element array", () => {
    expect(getSumOfArrayAfterElementsDoubled([10])).toBe(20);
  });

  test("handles given an array with negative integers", () => {
    expect(getSumOfArrayAfterElementsDoubled([-1, -2, -3, -4, -5])).toBe(-30);
  });

  test("hanles given an empty array", () => {
    expect(getSumOfArrayAfterElementsDoubled([])).toBe(0);
  });
});
