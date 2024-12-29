import { describe, expect, test } from "vitest";
import { findMissingLetter } from "./find_missing_letter";

describe("Find Missing Letter", () => {
  test("returns the missing letter from the alphabet", () => {
    expect(findMissingLetter("the quick brown box jumps over a lazy dog")).toBe("f");
  });

  test("returns null if no missing letter is found", () => {
    expect(findMissingLetter("the quick brown fox jumps over a lazy dog")).toBeNull();
  });

  // Handles case insensitivity
  test("handles uppercase and lowercase letters", () => {
    expect(findMissingLetter("A B C D E F G H I J K L M N O P Q R S T U V W X")).toBe("y");
  });

  // Handles partial alphabet input
  test("finds missing letter from a partial alphabet string", () => {
    expect(findMissingLetter("abcdefghijklmnopqrstuvwxy")).toBe("z");
  });

  // Returns the first missing letter
  test("returns the first missing letter when multiple are missing", () => {
    expect(findMissingLetter("the quick brown box jumps over")).toBe("a");
  });

  // Handles non-alphabet characters
  test("ignores non-alphabet characters in the input", () => {
    expect(findMissingLetter("1234567890 !@#$%^&*()_+|")).toBe("a");
  });

  // Handles repeating letters
  test("handles input with repeating letters", () => {
    expect(findMissingLetter("aa bb cc dd ee ff gg hh ii jj kk ll mm nn oo pp qq rr ss tt uu vv ww xx yy")).toBe("z");
  });

  // Handles single missing letter
  test("handles input with a single missing letter", () => {
    expect(findMissingLetter("abcdfghijklmnopqrstuvwxyz")).toBe("e");
  });

  // Handles input with complete alphabet but out of order
  test("returns null if the complete alphabet is present out of order", () => {
    expect(findMissingLetter("zyxwvutsrqponmlkjihgfedcba")).toBeNull();
  });
});
