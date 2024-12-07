import { describe, expectTypeOf, it } from "vitest";
import type { QuarterOfYear } from "./QuarterOfYear";

describe("QuarterOfYear", () => {
  it("should correctly infer the quarter for '01'", () => {
    type Result = QuarterOfYear<"01">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly infer the quarter for '02'", () => {
    type Result = QuarterOfYear<"02">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly infer the quarter for '03'", () => {
    type Result = QuarterOfYear<"03">;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should correctly infer the quarter for '04'", () => {
    type Result = QuarterOfYear<"04">;
    expectTypeOf<Result>().toEqualTypeOf<2>();
  });

  it("should correctly infer the quarter for '05'", () => {
    type Result = QuarterOfYear<"05">;
    expectTypeOf<Result>().toEqualTypeOf<2>();
  });

  it("should correctly infer the quarter for '06'", () => {
    type Result = QuarterOfYear<"06">;
    expectTypeOf<Result>().toEqualTypeOf<2>();
  });

  it("should correctly infer the quarter for '07'", () => {
    type Result = QuarterOfYear<"07">;
    expectTypeOf<Result>().toEqualTypeOf<3>();
  });

  it("should correctly infer the quarter for '08'", () => {
    type Result = QuarterOfYear<"08">;
    expectTypeOf<Result>().toEqualTypeOf<3>();
  });

  it("should correctly infer the quarter for '09'", () => {
    type Result = QuarterOfYear<"09">;
    expectTypeOf<Result>().toEqualTypeOf<3>();
  });

  it("should correctly infer the quarter for '10'", () => {
    type Result = QuarterOfYear<"10">;
    expectTypeOf<Result>().toEqualTypeOf<4>();
  });

  it("should correctly infer the quarter for '11'", () => {
    type Result = QuarterOfYear<"11">;
    expectTypeOf<Result>().toEqualTypeOf<4>();
  });

  it("should correctly infer the quarter for '12'", () => {
    type Result = QuarterOfYear<"12">;
    expectTypeOf<Result>().toEqualTypeOf<4>();
  });
});
