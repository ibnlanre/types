import { describe, expectTypeOf, test } from "vitest";
import type { IsPositive } from "./IsPositive";

describe("IsPositive", () => {
  test("IsPositive should return 1 for positive numbers", () => {
    type Result = IsPositive<42>;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  test("IsPositive should return 0 for zero", () => {
    type Result = IsPositive<0>;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  test("IsPositive should return 0 for negative numbers", () => {
    type Result = IsPositive<-10>;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });
});
