import { describe, expectTypeOf, it } from "vitest";
import type { GregorianDayOfWeek } from "./GregorianDayOfWeek";

describe("GregorianDayOfWeek", () => {
  // Test regular dates
  it("should correctly identify weekdays for regular dates", () => {
    // May 31, 2025 is a Saturday
    type SaturdayDate = GregorianDayOfWeek<"2025", "05", "31">;
    expectTypeOf<SaturdayDate>().toEqualTypeOf<0>();

    // December 25, 2023 was a Monday
    type ChristmasDay = GregorianDayOfWeek<"2023", "12", "25">;
    expectTypeOf<ChristmasDay>().toEqualTypeOf<2>();

    // July 4, 2023 was a Tuesday
    type IndependenceDay = GregorianDayOfWeek<"2023", "07", "04">;
    expectTypeOf<IndependenceDay>().toEqualTypeOf<3>();
  });

  // Test January and February (special cases due to Zeller's congruence)
  it("should handle January and February correctly", () => {
    // January 1, 2024 was a Monday
    type NewYearsDay = GregorianDayOfWeek<"2024", "01", "01">;
    expectTypeOf<NewYearsDay>().toEqualTypeOf<2>();

    // February 29, 2024 is a Thursday (Leap Year)
    type LeapDay = GregorianDayOfWeek<"2024", "02", "29">;
    expectTypeOf<LeapDay>().toEqualTypeOf<5>();
  });

  // Test century boundaries
  it("should handle century boundaries correctly", () => {
    // December 31, 1999 was a Friday
    type MillenniumEve = GregorianDayOfWeek<"1999", "12", "31">;
    expectTypeOf<MillenniumEve>().toEqualTypeOf<6>();

    // January 1, 2000 was a Saturday
    type Millennium = GregorianDayOfWeek<"2000", "01", "01">;
    expectTypeOf<Millennium>().toEqualTypeOf<0>();
  });

  // Test historical dates for algorithm verification
  it("should correctly calculate historical dates", () => {
    // July 4, 1776 was a Thursday
    type DeclarationDay = GregorianDayOfWeek<"1776", "07", "04">;
    expectTypeOf<DeclarationDay>().toEqualTypeOf<5>();

    // October 29, 1929 (Black Tuesday) was a Tuesday
    type BlackTuesday = GregorianDayOfWeek<"1929", "10", "29">;
    expectTypeOf<BlackTuesday>().toEqualTypeOf<3>();
  });

  // Test first days of months
  it("should handle first days of months correctly", () => {
    // March 1, 2024 is a Friday
    type MarchFirst = GregorianDayOfWeek<"2024", "03", "01">;
    expectTypeOf<MarchFirst>().toEqualTypeOf<6>();

    // April 1, 2024 is a Monday
    type AprilFirst = GregorianDayOfWeek<"2024", "04", "01">;
    expectTypeOf<AprilFirst>().toEqualTypeOf<2>();
  });

  // Test far future dates
  it("should handle far future dates", () => {
    // December 31, 2099 will be a Friday
    type EndOfCentury = GregorianDayOfWeek<"2099", "12", "31">;
    expectTypeOf<EndOfCentury>().toEqualTypeOf<5>();
  });
});
