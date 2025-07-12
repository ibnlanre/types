import { describe, expectTypeOf, it } from "vitest";
import type { AdvancedFormat } from "./AdvancedFormat";

type DateFormat = {
  year: "2020";
  month: "02";
  day: "29";
  hour: "02";
  minutes: "59";
  seconds: "59";
  milliseconds: "999";
  timezone: "+00:00";
  timestamp: 1640995199659;
};

describe("AdvancedFormat", () => {
  it("should correctly infer the output type for 'Q'", () => {
    type Result = AdvancedFormat<"Q", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"1">();
  });

  it("should correctly infer the output type for 'Qo'", () => {
    type Result = AdvancedFormat<"Qo", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"1st">();
  });

  it("should correctly infer the output type for 'Do'", () => {
    type Result = AdvancedFormat<"Do", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"29th">();
  });

  it("should correctly infer the output type for 'DDD'", () => {
    type Result = AdvancedFormat<"DDD", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"60">();
  });

  it("should correctly infer the output type for 'DDDo'", () => {
    type Result = AdvancedFormat<"DDDo", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"60th">();
  });

  it("should correctly infer the output type for 'DDDD'", () => {
    type Result = AdvancedFormat<"DDDD", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"060">();
  });

  it("should correctly infer the output type for 'k'", () => {
    type Result = AdvancedFormat<"k", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"2">();
  });

  it("should correctly infer the output type for 'kk'", () => {
    type Result = AdvancedFormat<"kk", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"02">();
  });

  it("should correctly infer the output type for 'X' in seconds", () => {
    type Result = AdvancedFormat<"X", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"1640995199">();
  });

  it("should correctly infer the output type for 'x' in milliseconds", () => {
    type Result = AdvancedFormat<"x", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"1640995199659">();
  });

  it("should correctly infer the output type for 'w'", () => {
    type Result = AdvancedFormat<"w", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"9">();
  });

  it("should correctly infer the output type for 'ww'", () => {
    type Result = AdvancedFormat<"ww", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"09">();
  });

  it("should correctly infer the output type for 'W'", () => {
    type Result = AdvancedFormat<"W", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"8">();
  });

  it("should correctly infer the output type for 'WW'", () => {
    type Result = AdvancedFormat<"WW", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"08">();
  });
});
