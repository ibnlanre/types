import { describe, expectTypeOf, it } from "vitest";
import type { IsLeapYear } from "./IsLeapYear";

describe("IsLeapYear", () => {
  it("should return 1 for years divisible by 4 but not by 100", () => {
    type Result1 = IsLeapYear<2024>;
    expectTypeOf<Result1>().toEqualTypeOf<1>();

    type Result2 = IsLeapYear<1996>;
    expectTypeOf<Result2>().toEqualTypeOf<1>();
  });

  it("should return 0 for years divisible by 100 but not by 400", () => {
    type Result1 = IsLeapYear<1900>;
    expectTypeOf<Result1>().toEqualTypeOf<0>();

    type Result2 = IsLeapYear<2100>;
    expectTypeOf<Result2>().toEqualTypeOf<0>();
  });

  it("should return 1 for years divisible by 400", () => {
    type Result1 = IsLeapYear<2000>;
    expectTypeOf<Result1>().toEqualTypeOf<1>();

    type Result2 = IsLeapYear<1600>;
    expectTypeOf<Result2>().toEqualTypeOf<1>();
  });

  it("should return 0 for non-leap years", () => {
    type Result1 = IsLeapYear<2023>;
    expectTypeOf<Result1>().toEqualTypeOf<0>();

    type Result2 = IsLeapYear<2025>;
    expectTypeOf<Result2>().toEqualTypeOf<0>();
  });
});
