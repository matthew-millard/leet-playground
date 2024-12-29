import { describe, expect, test } from "vitest";
import { findFirstDuplicate, getIntersection, isSubset } from "./isSubset";

describe("Is Subset", () => {
  test("returns true given a smaller array that is a subset of a larger array", () => {
    expect(isSubset(["a", "b", "c", "d", "e", "f"], ["e", "f"])).toBeTruthy();
  });

  test("returns true given a smaller array that is a subset of a larger array", () => {
    expect(isSubset(["e", "f"], ["a", "b", "c", "d", "e", "f"])).toBeTruthy();
  });

  test("returns false given a smaller array that is not a subset of a larger array", () => {
    expect(isSubset(["a", "b", "c"], ["b", "c", "d"])).toBeFalsy();
  });

  test("handles given two arrays that have the same length and contain the same values", () => {
    expect(isSubset(["a", "b", "c"], ["a", "b", "c"])).toBeTruthy();
  });

  test("handles give two arrays where one array is empty", () => {
    expect(isSubset(["a", "b", "c"], [])).toBeFalsy();
  });

  test("handles given two empty arrays", () => {
    expect(isSubset([], [])).toBeFalsy();
  });
});

describe("Find First Duplicate", () => {
  test("returns the first duplicate value given an array that contains at least one duplicate value", () => {
    expect(findFirstDuplicate(["a", "b", "c", "d", "b", "c"])).toBe("b");
  });
});

describe("Get Intersection", () => {
  test("returns the intersection array", () => {
    expect(getIntersection([1, 2, 3, 5, 7], [0, 2, 5, 9, 4])).toEqual([2, 5]);
  });
});
