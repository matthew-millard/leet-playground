import { describe, expect, test } from "vitest";
import { insertionSort } from "./insertion_sort";

describe("Insertion Sort", () => {
  test("returns an array in ascending order", () => {
    expect(insertionSort([7, 2, 1, 3, 4])).toEqual([1, 2, 3, 4, 7]);
  });

  test("handles a single-element array", () => {
    expect(insertionSort([10])).toEqual([10]);
  });

  test("handles an array with negative integers", () => {
    expect(insertionSort([-7, -2, 1, 3, 4])).toEqual([-7, -2, 1, 3, 4]);
  });

  test("handles an empty array", () => {
    expect(insertionSort([])).toEqual([]);
  });
});
