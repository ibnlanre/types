import { describe, expectTypeOf, it } from "vitest";
import type { ParseDate } from "./ParseDate";

describe("ParseDate", () => {
  it("should correctly parse a valid date", () => {
    type Output = ParseDate<"2022-01-01">;

    expectTypeOf<Output>().toEqualTypeOf<{
      hour: "00";
      minutes: "00";
      seconds: "00";
      milliseconds: "000";
      timezone: "+00:00";
      year: "2022";
      month: "01";
      day: "01";
      timestamp: 1640995200000;
    }>();
  });

  it("should correctly parse a date with a single digit month and day", () => {
    type Output = ParseDate<"2022-1-1">;

    expectTypeOf<Output>().toEqualTypeOf<{
      hour: "00";
      minutes: "00";
      seconds: "00";
      milliseconds: "000";
      timezone: "+00:00";
      year: "2022";
      month: "01";
      day: "01";
      timestamp: 1640995200000;
    }>();
  });

  it("should correctly parse a date with a trailing 'Z'", () => {
    type Output = ParseDate<"2022-01-01Z">;
    expectTypeOf<Output>().toEqualTypeOf<"'Z' is not a valid date format">();
  });

  it("should correctly parse a date with a trailing hyphen", () => {
    type Output = ParseDate<"2022-01-01-">;
    expectTypeOf<Output>().toEqualTypeOf<"'-01-' does not match any date component.">();
  });

  it("should correctly parse an invalid date", () => {
    type Output = ParseDate<"abcd">;
    expectTypeOf<Output>().toEqualTypeOf<"'abcd' is not a valid date format">();
  });

  it("should correctly parse an invalid date with a trailing hyphen", () => {
    type Output = ParseDate<"abcd-">;
    expectTypeOf<Output>().toEqualTypeOf<"'abcd-' does not match any date component.">();
  });
});
