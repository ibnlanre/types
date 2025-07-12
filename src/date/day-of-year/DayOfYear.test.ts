import { describe, expectTypeOf, it } from "vitest";
import type { DayOfYear } from "./DayOfYear";

describe("DayOfYear", () => {
  it("should calculate correct day of year for January dates", () => {
    expectTypeOf<DayOfYear<2023, 1, 1>>().toEqualTypeOf<1>();
    expectTypeOf<DayOfYear<2023, 1, 15>>().toEqualTypeOf<15>();
    expectTypeOf<DayOfYear<2023, 1, 31>>().toEqualTypeOf<31>();
  });

  it("should calculate correct day of year for mid-year dates", () => {
    expectTypeOf<DayOfYear<2023, 6, 15>>().toEqualTypeOf<166>();
    expectTypeOf<DayOfYear<2023, 7, 1>>().toEqualTypeOf<182>();
  });

  it("should handle leap year February correctly", () => {
    expectTypeOf<DayOfYear<2020, 2, 28>>().toEqualTypeOf<59>();
    expectTypeOf<DayOfYear<2020, 2, 29>>().toEqualTypeOf<60>();
    expectTypeOf<DayOfYear<2020, 3, 1>>().toEqualTypeOf<61>();
  });

  it("should handle non-leap year February correctly", () => {
    expectTypeOf<DayOfYear<2023, 2, 28>>().toEqualTypeOf<59>();
    expectTypeOf<DayOfYear<2023, 3, 1>>().toEqualTypeOf<60>();
  });

  it("should calculate correct day of year for December dates", () => {
    expectTypeOf<DayOfYear<2023, 12, 1>>().toEqualTypeOf<335>();
    expectTypeOf<DayOfYear<2023, 12, 31>>().toEqualTypeOf<365>();
    expectTypeOf<DayOfYear<2020, 12, 31>>().toEqualTypeOf<366>();
  });

  it("should handle quarter boundaries correctly", () => {
    // Q1 start/end
    expectTypeOf<DayOfYear<2023, 1, 1>>().toEqualTypeOf<1>();
    expectTypeOf<DayOfYear<2023, 3, 31>>().toEqualTypeOf<90>();

    // Q2 start/end
    expectTypeOf<DayOfYear<2023, 4, 1>>().toEqualTypeOf<91>();
    expectTypeOf<DayOfYear<2023, 6, 30>>().toEqualTypeOf<181>();

    // Q3 start/end
    expectTypeOf<DayOfYear<2023, 7, 1>>().toEqualTypeOf<182>();
    expectTypeOf<DayOfYear<2023, 9, 30>>().toEqualTypeOf<273>();

    // Q4 start/end
    expectTypeOf<DayOfYear<2023, 10, 1>>().toEqualTypeOf<274>();
    expectTypeOf<DayOfYear<2023, 12, 31>>().toEqualTypeOf<365>();
  });

  it("should handle month transitions correctly", () => {
    expectTypeOf<DayOfYear<2023, 4, 30>>().toEqualTypeOf<120>();
    expectTypeOf<DayOfYear<2023, 5, 1>>().toEqualTypeOf<121>();
    expectTypeOf<DayOfYear<2023, 5, 31>>().toEqualTypeOf<151>();
    expectTypeOf<DayOfYear<2023, 6, 1>>().toEqualTypeOf<152>();
  });

  it("should handle multiple leap years correctly", () => {
    // Test different leap years
    expectTypeOf<DayOfYear<2024, 1, 1>>().toEqualTypeOf<1>();
    expectTypeOf<DayOfYear<2020, 12, 31>>().toEqualTypeOf<366>();
    expectTypeOf<DayOfYear<2024, 12, 31>>().toEqualTypeOf<366>();
    expectTypeOf<DayOfYear<2028, 12, 31>>().toEqualTypeOf<366>();

    // Test non-leap years
    expectTypeOf<DayOfYear<2023, 12, 31>>().toEqualTypeOf<365>();
    expectTypeOf<DayOfYear<2025, 12, 31>>().toEqualTypeOf<365>();
  });

  it("should handle special dates correctly", () => {
    // Special dates like equinoxes and solstices (approximate)
    expectTypeOf<DayOfYear<2023, 3, 20>>().toEqualTypeOf<79>(); // Spring equinox
    expectTypeOf<DayOfYear<2023, 6, 21>>().toEqualTypeOf<172>(); // Summer solstice
    expectTypeOf<DayOfYear<2023, 9, 23>>().toEqualTypeOf<266>(); // Autumn equinox
    expectTypeOf<DayOfYear<2023, 12, 21>>().toEqualTypeOf<355>(); // Winter solstice
  });
});
