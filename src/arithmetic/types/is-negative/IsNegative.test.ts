import { describe, expectTypeOf, test } from "vitest";
import { IsNegative } from "./IsNegative";

describe("IsNegative", () => {
  test("IsNegative should return 1 for negative numbers", () => {
    type Result = IsNegative<-42>;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  test("IsNegative should return 0 for zero", () => {
    type Result = IsNegative<0>;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  test("IsNegative should return 0 for positive numbers", () => {
    type Result = IsNegative<10>;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });
});
