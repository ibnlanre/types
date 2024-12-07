import { describe, expectTypeOf, it } from "vitest";
import type { WeekOfYear } from "./WeekOfYear";

describe("WeekOfYear", () => {
  it("should correctly infer the output type for Gregorian calendar", () => {
    type GregorianWeekOfYearResult = WeekOfYear<
      "2022",
      "01",
      "01"
    >;
    expectTypeOf<GregorianWeekOfYearResult>().toEqualTypeOf<1>();
  });

  it("should correctly infer the output type for ISO calendar", () => {
    type ISOWeekOfYearResult = WeekOfYear<"2022", "01", "01", "ISO">;
    expectTypeOf<ISOWeekOfYearResult>().toEqualTypeOf<0>();
  });
});
