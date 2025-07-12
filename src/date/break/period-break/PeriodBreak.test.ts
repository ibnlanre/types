import { describe, expectTypeOf, it } from "vitest";
import type { PeriodBreak } from "./PeriodBreak";

describe("PeriodBreak", () => {
  it("should handle year token", () => {
    type Result = PeriodBreak<"2022-">;
    expectTypeOf<Result>().toEqualTypeOf<{
      year: "2022";
    }>();
  });

  it("should handle month token", () => {
    type Result = PeriodBreak<"-09-">;
    expectTypeOf<Result>().toEqualTypeOf<{
      month: "09";
    }>();
  });

  it("should handle day token", () => {
    type Result = PeriodBreak<"-04T">;
    expectTypeOf<Result>().toEqualTypeOf<{
      day: "04";
    }>();
  });

  it("should handle hour token", () => {
    type Result = PeriodBreak<"T21:">;
    expectTypeOf<Result>().toEqualTypeOf<{
      hour: "21";
    }>();
  });

  it("should handle minutes token", () => {
    type Result = PeriodBreak<":00:">;
    expectTypeOf<Result>().toEqualTypeOf<{
      minutes: "00";
    }>();
  });

  it("should handle seconds token", () => {
    type Result = PeriodBreak<":04.">;
    expectTypeOf<Result>().toEqualTypeOf<{
      seconds: "04";
    }>();
  });

  it("should handle milliseconds token", () => {
    type Result = PeriodBreak<".876+">;
    expectTypeOf<Result>().toEqualTypeOf<{
      milliseconds: "876";
    }>();
  });

  it("should handle time zone token", () => {
    type Result = PeriodBreak<"+02:00">;
    expectTypeOf<Result>().toEqualTypeOf<{
      timezone: "+02:00";
    }>();
  });

  it("should handle unknown token", () => {
    type Result = PeriodBreak<"unknown">;
    expectTypeOf<Result>().toEqualTypeOf<"'unknown' does not match any date component.">();
  });
});
