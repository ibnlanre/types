import { describe, expectTypeOf, test } from "vitest";
import { Maximum } from "./Maximum";

describe("Maximum", () => {
  test("Maximum should return the maximum number in the array", () => {
    type Result = Maximum<[10, 5, 2]>;
    expectTypeOf<Result>().toEqualTypeOf<10>();
  });

  test("Maximum should handle single number", () => {
    type Result = Maximum<[5]>;
    expectTypeOf<Result>().toEqualTypeOf<5>();
  });

  test("Maximum should handle empty array", () => {
    type Result = Maximum<[]>;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  test("Maximum should handle negative numbers", () => {
    type Result = Maximum<[-10, 5, -2]>;
    expectTypeOf<Result>().toEqualTypeOf<5>();
  });
});
