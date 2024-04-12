import { describe, expectTypeOf, test } from "vitest";
import { Normalise } from "./Normalise";

describe("Normalise", () => {
  test("Normalise should normalise the given unsigned float numbers", () => {
    type Result = Normalise<[[1, 2], [3, 2]], [[4], [5, 6]]>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 2, 3, 2], [0, 4, 5, 6], 2]>();
  });

  test("Normalise should handle different lengths of integer parts", () => {
    type Result = Normalise<[[1, 2], [3, 4]], [[5], [6, 0]]>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 2, 3, 4], [0, 5, 6, 0], 2]>();
  });

  test("Normalise should handle different lengths of fractional parts", () => {
    type Result = Normalise<[[1, 0], [2]], [[3, 4], [5, 6]]>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 0, 2, 0], [3, 4, 5, 6], 2]>();
  });

  test("Normalise should handle empty integer parts", () => {
    type Result = Normalise<[[0], []], [[1, 2], [3]]>;
    expectTypeOf<Result>().toEqualTypeOf<[[0, 0, 0], [1, 2, 3], 1]>();
  });

  test("Normalise should handle empty fractional parts", () => {
    type Result = Normalise<[[1, 2], [3]], [[], []]>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 2, 3], [0, 0, 0], 1]>();
  });
});
