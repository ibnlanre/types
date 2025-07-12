import { describe, expectTypeOf, it } from "vitest";

import type { ISOWeekOfYear } from "./ISOWeekOfYear";

describe("ISOWeekOfYear", () => {
  it("should calculate ISO week of year for January 1st", () => {
    type Result = ISOWeekOfYear<"2024", "01", "01">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should calculate ISO week of year for mid-year date", () => {
    type Result = ISOWeekOfYear<"2024", "06", "15">;
    expectTypeOf<Result>().toEqualTypeOf<24>();
  });

  it("should calculate ISO week of year for year end", () => {
    type Result = ISOWeekOfYear<"2024", "12", "31">;
    expectTypeOf<Result>().toEqualTypeOf<53>();
  });

  it("should calculate ISO week of year for leap year", () => {
    type Result = ISOWeekOfYear<"2024", "02", "29">;
    expectTypeOf<Result>().toEqualTypeOf<9>();
  });

  it("should calculate ISO week of year for first day in the year", () => {
    type Test1 = ISOWeekOfYear<"2023", "01", "01">;
    expectTypeOf<Test1>().toEqualTypeOf<52>();

    type Test2 = ISOWeekOfYear<"2022", "01", "02">;
    expectTypeOf<Test2>().toEqualTypeOf<52>();
  });

  it("should calculate ISO week of year for common year", () => {
    type Result = ISOWeekOfYear<"2023", "02", "28">;
    expectTypeOf<Result>().toEqualTypeOf<9>();
  });

  it("should calculate ISO week of year for first week", () => {
    type Result = ISOWeekOfYear<"2024", "01", "07">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });
});
