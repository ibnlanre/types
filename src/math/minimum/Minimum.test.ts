import { describe, expectTypeOf, test } from "vitest";
import { Minimum } from "./Minimum";

describe("Minimum", () => {
  test("Minimum should return the minimum number in the array", () => {
    type Result = Minimum<[10, 5, 2]>;
    expectTypeOf<Result>().toEqualTypeOf<2>();
  });

  test("Minimum should handle single number", () => {
    type Result = Minimum<[5]>;
    expectTypeOf<Result>().toEqualTypeOf<5>();
  });

  test("Minimum should handle empty array", () => {
    type Result = Minimum<[]>;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  test("Minimum should handle negative numbers", () => {
    type Result = Minimum<[-10, 5, -2]>;
    expectTypeOf<Result>().toEqualTypeOf<-10>();
  });
});
