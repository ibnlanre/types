import { describe, expectTypeOf, it } from "vitest";
import type { ISODayOfWeek } from "./ISODayOfWeek";

describe("ISODayOfWeek", () => {
  // Test regular dates
  it("should correctly identify ISO weekdays for regular dates", () => {
    // May 31, 2025 is a Saturday (ISO: 6)
    type SaturdayDate = ISODayOfWeek<"2025", "05", "31">;
    expectTypeOf<SaturdayDate>().toEqualTypeOf<6>();

    // December 25, 2023 was a Monday (ISO: 1)
    type ChristmasDay = ISODayOfWeek<"2023", "12", "25">;
    expectTypeOf<ChristmasDay>().toEqualTypeOf<1>();

    // July 4, 2023 was a Tuesday (ISO: 2)
    type IndependenceDay = ISODayOfWeek<"2023", "07", "04">;
    expectTypeOf<IndependenceDay>().toEqualTypeOf<2>();
  });

  // Test January and February (special cases from Gregorian)
  it("should handle January and February correctly", () => {
    // January 1, 2024 was a Monday (ISO: 1)
    type NewYearsDay = ISODayOfWeek<"2024", "01", "01">;
    expectTypeOf<NewYearsDay>().toEqualTypeOf<1>();

    // February 29, 2024 is a Thursday (ISO: 4)
    type LeapDay = ISODayOfWeek<"2024", "02", "29">;
    expectTypeOf<LeapDay>().toEqualTypeOf<4>();
  });

  // Test century boundaries
  it("should handle century boundaries correctly", () => {
    // December 31, 1999 was a Friday (ISO: 5)
    type MillenniumEve = ISODayOfWeek<"1999", "12", "31">;
    expectTypeOf<MillenniumEve>().toEqualTypeOf<5>();

    // January 1, 2000 was a Saturday (ISO: 6)
    type Millennium = ISODayOfWeek<"2000", "01", "01">;
    expectTypeOf<Millennium>().toEqualTypeOf<6>();
  });

  // Test ISO weekday conversions
  it("should convert Gregorian to ISO weekdays correctly", () => {
    // Test Sunday (Gregorian: 1, ISO: 7)
    type Sunday = ISODayOfWeek<"2024", "03", "03">;
    expectTypeOf<Sunday>().toEqualTypeOf<7>();

    // Test Monday (Gregorian: 2, ISO: 1)
    type Monday = ISODayOfWeek<"2024", "03", "04">;
    expectTypeOf<Monday>().toEqualTypeOf<1>();

    // Test Friday (Gregorian: 6, ISO: 5)
    type Friday = ISODayOfWeek<"2024", "03", "08">;
    expectTypeOf<Friday>().toEqualTypeOf<5>();

    // Test Saturday (Gregorian: 0, ISO: 6)
    type Saturday = ISODayOfWeek<"2024", "03", "09">;
    expectTypeOf<Saturday>().toEqualTypeOf<6>();
  });

  // Test first days of months
  it("should handle first days of months correctly", () => {
    // March 1, 2024 is a Friday (ISO: 5)
    type MarchFirst = ISODayOfWeek<"2024", "03", "01">;
    expectTypeOf<MarchFirst>().toEqualTypeOf<5>();

    // April 1, 2024 is a Monday (ISO: 1)
    type AprilFirst = ISODayOfWeek<"2024", "04", "01">;
    expectTypeOf<AprilFirst>().toEqualTypeOf<1>();
  });
});
