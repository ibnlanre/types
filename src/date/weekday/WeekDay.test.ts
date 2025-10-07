import { describe, expectTypeOf, it } from "vitest";
import type { WeekDay } from "./WeekDay";

describe("WeekDay", () => {
  it("should return the correct Gregorian week day", () => {
    type Result = WeekDay<"2024", "03", "03", "Gregorian">;
    expectTypeOf<Result>().toMatchTypeOf<"Sunday">;
  });

  it("should return the correct ISO week day", () => {
    type Result = WeekDay<"2024", "03", "04", "ISO">;
    expectTypeOf<Result>().toMatchTypeOf<"Monday">;
  });

  it("should return the correct North American week day", () => {
    type Result = WeekDay<"2024", "03", "05", "North_American">;
    expectTypeOf<Result>().toMatchTypeOf<"Tuesday">();
  });

  it("should return the correct North American week day by default", () => {
    type Result = WeekDay<"2024", "03", "06">;
    expectTypeOf<Result>().toMatchTypeOf<"Wednesday">;
  });
});
