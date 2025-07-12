import { describe, expectTypeOf, it } from "vitest";
import type { LeapYearsSince } from "./LeapYearsSince";

describe("LeapYearsSince", () => {
  it("should count leap years since 1970", () => {
    type Result = LeapYearsSince<2000>;
    expectTypeOf<Result>().toEqualTypeOf<8>(); // 1972, 1976, 1980, 1984, 1988, 1992, 1996
  });

  it("should handle century years correctly", () => {
    type Result = LeapYearsSince<2100>;
    expectTypeOf<Result>().toEqualTypeOf<32>(); // 2100 is not a leap year
  });

  it("should handle large ranges without excessive depth error", () => {
    type Result = LeapYearsSince<9012>;
    expectTypeOf<Result>().toMatchTypeOf<1708>();
  });


  it("should count leap years since a custom period", () => {
    type Result = LeapYearsSince<2023, 1901>;
    expectTypeOf<Result>().toEqualTypeOf<30>(); // 1904, 1908, ..., 2020
  });

  it("should return 0 when end year is less than start year", () => {
    type Result = LeapYearsSince<1960>;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  it("should handle 400-year special cases", () => {
    type Result = LeapYearsSince<2400>;
    expectTypeOf<Result>().toEqualTypeOf<105>();
  });
});
