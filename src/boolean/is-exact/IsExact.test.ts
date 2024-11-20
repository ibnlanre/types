import { describe, expectTypeOf, test } from "vitest";
import type { IsExact } from "./IsExact";

describe("IsExact", () => {
  test("IsExact should return true for exact types", () => {
    type Result = IsExact<1, 1>;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  test("IsExact should return false for non-exact types", () => {
    type Result = IsExact<1, 2>;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  test("IsExact should handle void types", () => {
    type Result = IsExact<void, undefined>;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  test("IsExact should handle unknown types", () => {
    type Result = IsExact<unknown, any>;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  test("IsExact should handle union types", () => {
    type Result = IsExact<1 | 2, 1 | 2>;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  test("IsExact should handle tuple types", () => {
    type Result = IsExact<[1, 2], [1, 2]>;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });
});
