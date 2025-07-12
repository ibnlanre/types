import { describe, expectTypeOf, it } from "vitest";

import type { GregorianWeekOfYear } from "./GregorianWeekOfYear";

describe("GregorianWeekOfYear", () => {
  it("should calculate correct week number for start of year", () => {
    expectTypeOf<GregorianWeekOfYear<"2023", "01", "01">>().toEqualTypeOf<1>();
  });

  it("should calculate correct week number for middle of year", () => {
    expectTypeOf<GregorianWeekOfYear<"2023", "06", "15">>().toEqualTypeOf<24>();
  });

  it("should calculate correct week number for end of year", () => {
    expectTypeOf<GregorianWeekOfYear<"2023", "12", "31">>().toEqualTypeOf<53>();
  });

  it("should calculate correct week number for leap year", () => {
    expectTypeOf<GregorianWeekOfYear<"2024", "02", "29">>().toEqualTypeOf<9>();
  });
});
