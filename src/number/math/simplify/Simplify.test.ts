import { describe, expectTypeOf, test } from "vitest";
import type { Simplify } from "./Simplify";

describe("SimplifyDecimal", () => {
  test("should simplify decimal correctly", () => {
    type Result = Simplify<1.2>;
    expectTypeOf<Result>().toEqualTypeOf<[6, 5]>();
  });

  test("should simplify decimal correctly", () => {
    type Result = Simplify<2.4>;
    expectTypeOf<Result>().toEqualTypeOf<[12, 5]>();
  });

  test("should simplify decimal correctly", () => {
    type Result = Simplify<0.8>;
    expectTypeOf<Result>().toEqualTypeOf<[4, 5]>();
  });

  test("should simplify decimal correctly", () => {
    type Result = Simplify<0.6>;
    expectTypeOf<Result>().toEqualTypeOf<[3, 5]>();
  });

  test("should simplify decimal correctly", () => {
    type Result = Simplify<0.4>;
    expectTypeOf<Result>().toEqualTypeOf<[2, 5]>();
  });

  test("should simplify decimal correctly", () => {
    type Result = Simplify<0.2>;
    expectTypeOf<Result>().toEqualTypeOf<[1, 5]>();
  });
});
