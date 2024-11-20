import { describe, expectTypeOf, it } from "vitest";
import type { IsUnary } from "./IsUnary";

describe("IsUnary", () => {
  it("should return 1 for a unary type", () => {
    type Result = IsUnary<1>;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should return 0 for a non-unary type", () => {
    type Result = IsUnary<2>;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should return 0 for an empty array", () => {
    type Result = IsUnary<0>;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should return 0 for a non-array type", () => {
    type Result = IsUnary<number>;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });
});
