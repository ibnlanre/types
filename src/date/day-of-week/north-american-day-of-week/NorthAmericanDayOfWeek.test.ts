import { describe, expectTypeOf, it } from "vitest";
import type { NorthAmericanDayOfWeek } from "./NorthAmericanDayOfWeek";

describe("NorthAmericanDayOfWeek", () => {
  it("should calculate North American day of week correctly", () => {
    type Sunday = NorthAmericanDayOfWeek<"2023", "10", "22">; // Sunday
    type Monday = NorthAmericanDayOfWeek<"2023", "10", "23">; // Monday
    type Tuesday = NorthAmericanDayOfWeek<"2023", "10", "24">; // Tuesday
    type Wednesday = NorthAmericanDayOfWeek<"2023", "10", "25">; // Wednesday
    type Thursday = NorthAmericanDayOfWeek<"2023", "10", "26">; // Thursday
    type Friday = NorthAmericanDayOfWeek<"2023", "10", "27">; // Friday
    type Saturday = NorthAmericanDayOfWeek<"2023", "10", "28">; // Saturday

    const cases = [
      expectTypeOf<Sunday>().toEqualTypeOf<0>(),
      expectTypeOf<Monday>().toEqualTypeOf<1>(),
      expectTypeOf<Tuesday>().toEqualTypeOf<2>(),
      expectTypeOf<Wednesday>().toEqualTypeOf<3>(),
      expectTypeOf<Thursday>().toEqualTypeOf<4>(),
      expectTypeOf<Friday>().toEqualTypeOf<5>(),
      expectTypeOf<Saturday>().toEqualTypeOf<6>(),
    ];
  });

  it("should handle leap years correctly", () => {
    type LeapYearFeb29 = NorthAmericanDayOfWeek<"2024", "02", "29">;
    const cases = [expectTypeOf<LeapYearFeb29>().toEqualTypeOf<4>()]; // Thursday
  });
});
