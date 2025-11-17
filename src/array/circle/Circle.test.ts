import type { Call } from "@ibnlanre/types";
import { describe, expectTypeOf, it } from "vitest";
import type { Circle, TCircle } from "./Circle";

describe("Circle", () => {
  it("should generate all rotations for three elements", () => {
    type Result = Circle<[1, 2, 3]>;
    type TResult = Call<TCircle<[1, 2, 3]>>;

    expectTypeOf<Result>().toEqualTypeOf<[[1, 2, 3], [2, 3, 1], [3, 1, 2]]>();
    expectTypeOf<TResult>().toEqualTypeOf<[[1, 2, 3], [2, 3, 1], [3, 1, 2]]>();
  });

  it("should return single rotation for single element", () => {
    type Result = Circle<["a"]>;
    type TResult = Call<TCircle<["a"]>>;

    expectTypeOf<Result>().toEqualTypeOf<[["a"]]>();
    expectTypeOf<TResult>().toEqualTypeOf<[["a"]]>();
  });

  it("should return empty array for empty input", () => {
    type Result = Circle<[]>;
    type TResult = Call<TCircle<[]>>;

    expectTypeOf<Result>().toEqualTypeOf<[]>();
    expectTypeOf<TResult>().toEqualTypeOf<[]>();
  });

  it("should generate two rotations for two elements", () => {
    type Result = Circle<[true, false]>;
    type TResult = Call<TCircle<[true, false]>>;

    expectTypeOf<Result>().toEqualTypeOf<[[true, false], [false, true]]>();
    expectTypeOf<TResult>().toEqualTypeOf<[[true, false], [false, true]]>();
  });

  it("should handle four element rotation", () => {
    type Result = Circle<["a", "b", "c", "d"]>;
    type TResult = Call<TCircle<["a", "b", "c", "d"]>>;

    expectTypeOf<Result>().toEqualTypeOf<
      [
        ["a", "b", "c", "d"],
        ["b", "c", "d", "a"],
        ["c", "d", "a", "b"],
        ["d", "a", "b", "c"]
      ]
    >();
    expectTypeOf<TResult>().toEqualTypeOf<
      [
        ["a", "b", "c", "d"],
        ["b", "c", "d", "a"],
        ["c", "d", "a", "b"],
        ["d", "a", "b", "c"]
      ]
    >();
  });

  it("should work with mixed types", () => {
    type Result = Circle<[1, "two", true]>;

    expectTypeOf<Result>().toEqualTypeOf<
      [[1, "two", true], ["two", true, 1], [true, 1, "two"]]
    >();
  });
});
