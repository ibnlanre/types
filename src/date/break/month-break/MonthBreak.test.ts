import { describe, expectTypeOf, it } from "vitest";
import type { MonthBreak } from "./MonthBreak";

describe("MonthBreak", () => {
  it("should correctly handle a valid month token with hyphens", () => {
    type Output = MonthBreak<"-05-">;
    expectTypeOf<Output>().toEqualTypeOf<{ month: "05" }>();
  });

  it("should correctly handle a valid month token without hyphens", () => {
    type Output = MonthBreak<"-05">;
    expectTypeOf<Output>().toEqualTypeOf<{ month: "05" }>();
  });

  it("should return an error message for an invalid month token", () => {
    type Output = MonthBreak<"abcd">;
    expectTypeOf<Output>().toEqualTypeOf<"The token provided is not a valid month.">();
  });
});
