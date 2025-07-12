import { describe, expectTypeOf, it } from "vitest";
import type { DayBreak } from "./DayBreak";

describe("DayBreak", () => {
  it("should split date with 'T' token", () => {
    type Result = DayBreak<"-02T">;
    expectTypeOf<Result>().toMatchTypeOf<{ day: "02" }>();
  });

  it("should split date with 'T' token and year/month", () => {
    type Result = DayBreak<"-02T", { year: "2022"; month: "03" }>;
    expectTypeOf<Result>().toMatchTypeOf<{
      day: "02";
      year: "2022";
      month: "03";
    }>();
  });

  it("should split date without 'T' token", () => {
    type Result = DayBreak<"-01", { year: "2022"; month: "03" }>;
    expectTypeOf<Result>().toMatchTypeOf<{
      day: "01";
      year: "2022";
      month: "03";
    }>();
  });

  it("should handle invalid tokens", () => {
    type Result = DayBreak<"X">;
    expectTypeOf<Result>().toMatchTypeOf<"'X' is not a valid day token.">();
  });
});
