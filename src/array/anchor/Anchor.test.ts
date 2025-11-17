import { describe, expectTypeOf, test } from "vitest";
import type { Anchor } from "./Anchor";

describe("Anchor", () => {
  test("returns empty array when input is empty", () => {
    type Result = Anchor<[]>;
    expectTypeOf<Result>().toEqualTypeOf<[]>();
  });

  test("returns empty array when only shank provided (no nested arrays)", () => {
    type Result = Anchor<[1]>;
    expectTypeOf<Result>().toEqualTypeOf<[]>();
  });

  test("wraps single permutation when shank with one nested array", () => {
    type Result = Anchor<["X", ["a"]]>;
    expectTypeOf<Result>().toEqualTypeOf<[["X", ["a"]]]>();
  });

  test("preserves multi-element nested array structure in single permutation", () => {
    type Result = Anchor<["X", ["a", "b", "c"]]>;
    expectTypeOf<Result>().toEqualTypeOf<[["X", ["a", "b", "c"]]]>();
  });

  test("generates two permutations with shank anchored to first nested array", () => {
    type Result = Anchor<["X", ["a"], ["b"]]>;
    expectTypeOf<Result>().toEqualTypeOf<
      [["X", ["a"], ["b"]], ["X", ["b"], ["a"]]]
    >();
  });

  test("generates six rotational permutations for three nested arrays", () => {
    type Result = Anchor<[0, [1], [2], [3]]>;
    expectTypeOf<Result>().toEqualTypeOf<
      [
        [0, [1], [2], [3]],
        [0, [2], [1], [3]],
        [0, [2], [3], [1]],
        [0, [1], [3], [2]],
        [0, [3], [1], [2]],
        [0, [3], [2], [1]]
      ]
    >();
  });

  test("handles mixed types (number shank, string and number nested arrays)", () => {
    type Result = Anchor<[99, ["a"], ["b"]]>;
    expectTypeOf<Result>().toEqualTypeOf<
      [[99, ["a"], ["b"]], [99, ["b"], ["a"]]]
    >();
  });
});
