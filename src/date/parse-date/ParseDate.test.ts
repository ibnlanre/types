import { describe, expectTypeOf, it } from "vitest";
import { ParseDate } from "./ParseDate";

describe("ParseDate", () => {
  it("should correctly parse a valid date", () => {
    type Output = ParseDate<"2022-01-01">;
    expectTypeOf<Output>().toEqualTypeOf<{
      year: "2022";
      month: "01";
      day: "01";
      timestamp: 1640991600000;
    }>();
  });

  it("should correctly parse a date with a single digit month and day", () => {
    type Output = ParseDate<"2022-1-1">;
    expectTypeOf<Output>().toEqualTypeOf<{
      year: "2022";
      month: "01";
      day: "01";
      timestamp: 1640991600000;
    }>();
  });

  it("should correctly parse a date with a trailing 'Z'", () => {
    type Output = ParseDate<"2022-01-01Z">;
    expectTypeOf<Output>().toEqualTypeOf<{
      year: "2022";
      month: "01";
      day: "01";
      timestamp: 1640991600000;
    }>();
  });

  type Output = ParseDate<"-9012">;

  it("should correctly parse a date with a trailing hyphen", () => {
    type Output = ParseDate<"2022-01-01-">;
    expectTypeOf<Output>().toEqualTypeOf<"Invalid Date">();
  });

  it("should correctly parse an invalid date", () => {
    type Output = ParseDate<"abcd">;
    expectTypeOf<Output>().toEqualTypeOf<"Invalid Date">();
  });

  it("should correctly parse an invalid date with a trailing hyphen", () => {
    type Output = ParseDate<"abcd-">;
    expectTypeOf<Output>().toEqualTypeOf<"Invalid Date">();
  });
});
