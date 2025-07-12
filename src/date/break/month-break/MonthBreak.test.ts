import { describe, expectTypeOf, it } from "vitest";
import type { MonthBreak } from "./MonthBreak";

describe("MonthBreak", () => {
  it("should correctly handle a valid month token with hyphens", () => {
    type Result = MonthBreak<"-05-">;
    expectTypeOf<Result>().toEqualTypeOf<{ month: "05" }>();
  });

  it("should correctly handle a valid month token without hyphens", () => {
    type Result = MonthBreak<"-05">;
    expectTypeOf<Result>().toEqualTypeOf<{ month: "05" }>();
  });

  it("should correctly handle a valid month token with 'Z' suffix", () => {
    type Result = MonthBreak<"-05Z">;
    expectTypeOf<Result>().toEqualTypeOf<{ month: "05" }>();
  });

  it("should correctly handle a valid month token with additional properties", () => {
    type Result = MonthBreak<"-05-", { year: "2022" }>;
    expectTypeOf<Result>().toEqualTypeOf<{ month: "05"; year: "2022" }>();
  });

  it("should return an error message for an invalid month token", () => {
    type Result = MonthBreak<"abcd">;
    expectTypeOf<Result>().toEqualTypeOf<"'abcd' is not a valid month token.">();
  });
});
