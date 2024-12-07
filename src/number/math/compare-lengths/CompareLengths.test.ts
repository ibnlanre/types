import { describe, expectTypeOf, test } from "vitest";
import type { CompareLengths } from "./CompareLengths";

describe("CompareLengths", () => {
  test("CompareLengths should return 0 for equal length arrays", () => {
    type Result = CompareLengths<[1, 2, 3], [4, 5, 6]>;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  test("CompareLengths should return -1 for empty first array", () => {
    type Result = CompareLengths<[], [1, 2, 3]>;
    expectTypeOf<Result>().toEqualTypeOf<-1>();
  });

  test("CompareLengths should return 1 for empty second array", () => {
    type Result = CompareLengths<[1, 2, 3], []>;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  test("CompareLengths should recursively compare the lengths of nested arrays", () => {
    type Result = CompareLengths<[[1, 2], [3, 4]], [[5, 6], [7, 8], [9, 10]]>;
    expectTypeOf<Result>().toEqualTypeOf<-1>();
  });
});
