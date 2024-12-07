import { describe, expectTypeOf, it } from "vitest";
import type { SeasonOfYear } from "./SeasonOfYear";

describe("SeasonOfYear", () => {
  it("should correctly infer the season for '01'", () => {
    type Result = SeasonOfYear<"01">;
    expectTypeOf<Result>().toEqualTypeOf<"Spring">();
  });

  it("should correctly infer the season for '02'", () => {
    type Result = SeasonOfYear<"02">;
    expectTypeOf<Result>().toEqualTypeOf<"Spring">();
  });

  it("should correctly infer the season for '03'", () => {
    type Result = SeasonOfYear<"03">;
    expectTypeOf<Result>().toEqualTypeOf<"Spring">();
  });

  it("should correctly infer the season for '04'", () => {
    type Result = SeasonOfYear<"04">;
    expectTypeOf<Result>().toEqualTypeOf<"Summer">();
  });

  it("should correctly infer the season for '05'", () => {
    type Result = SeasonOfYear<"05">;
    expectTypeOf<Result>().toEqualTypeOf<"Summer">();
  });

  it("should correctly infer the season for '06'", () => {
    type Result = SeasonOfYear<"06">;
    expectTypeOf<Result>().toEqualTypeOf<"Summer">();
  });

  it("should correctly infer the season for '07'", () => {
    type Result = SeasonOfYear<"07">;
    expectTypeOf<Result>().toEqualTypeOf<"Autumn">();
  });

  it("should correctly infer the season for '08'", () => {
    type Result = SeasonOfYear<"08">;
    expectTypeOf<Result>().toEqualTypeOf<"Autumn">();
  });

  it("should correctly infer the season for '09'", () => {
    type Result = SeasonOfYear<"09">;
    expectTypeOf<Result>().toEqualTypeOf<"Autumn">();
  });

  it("should correctly infer the season for '10'", () => {
    type Result = SeasonOfYear<"10">;
    expectTypeOf<Result>().toEqualTypeOf<"Winter">();
  });

  it("should correctly infer the season for '11'", () => {
    type Result = SeasonOfYear<"11">;
    expectTypeOf<Result>().toEqualTypeOf<"Winter">();
  });

  it("should correctly infer the season for '12'", () => {
    type Result = SeasonOfYear<"12">;
    expectTypeOf<Result>().toEqualTypeOf<"Winter">();
  });
});
