import { describe, expectTypeOf, it } from "vitest";
import type { SimpleFormat } from "./SimpleFormat";

type DateFormat = {
  year: "2020";
  month: "02";
  day: "4";
  hour: "21";
  minute: "06";
  second: "09";
  millisecond: "999";
  timezone: "+00:00";
  timestamp: 1640995199659;
};

describe("SimpleFormat", () => {
  it("should correctly infer the output type for 'YY'", () => {
    type Result = SimpleFormat<"YY", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"20">();
  });

  it("should correctly infer the output type for 'YYYY'", () => {
    type Result = SimpleFormat<"YYYY", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"2020">();
  });

  it("should correctly infer the output type for 'M'", () => {
    type Result = SimpleFormat<"M", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"2">();
  });

  it("should correctly infer the output type for 'Mo'", () => {
    type Result = SimpleFormat<"Mo", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"2nd">();
  });

  it("should correctly infer the output type for 'MM'", () => {
    type Result = SimpleFormat<"MM", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"02">();
  });

  it("should correctly infer the output type for 'MMM'", () => {
    type Result = SimpleFormat<"MMM", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"Feb">();
  });

  it("should correctly infer the output type for 'MMMM'", () => {
    type Result = SimpleFormat<"MMMM", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"February">();
  });

  it("should correctly infer the output type for 'D'", () => {
    type Result = SimpleFormat<"D", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"4">();
  });

  it("should correctly infer the output type for 'DD'", () => {
    type Result = SimpleFormat<"DD", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"04">();
  });

  it("should correctly infer the output type for 'd'", () => {
    type Result = SimpleFormat<"d", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"2">();
  });

  it("should correctly infer the output type for 'do'", () => {
    type Result = SimpleFormat<"do", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"2nd">();
  });

  it("should correctly infer the output type for 'dd'", () => {
    type Result = SimpleFormat<"dd", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"Tu">();
  });

  it("should correctly infer the output type for 'ddd'", () => {
    type Result = SimpleFormat<"ddd", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"Tue">();
  });

  it("should correctly infer the output type for 'dddd'", () => {
    type Result = SimpleFormat<"dddd", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"Tuesday">();
  });

  it("should correctly infer the output type for 'e'", () => {
    type Result = SimpleFormat<"e", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"2">();
  });

  it("should correctly infer the output type for 'E'", () => {
    type Result = SimpleFormat<"E", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"2">();
  });

  it("should correctly infer the output type for 'H'", () => {
    type Result = SimpleFormat<"H", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"21">();
  });

  it("should correctly infer the output type for 'HH'", () => {
    type Result = SimpleFormat<"HH", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"21">();
  });

  it("should correctly infer the output type for 'h'", () => {
    type Result = SimpleFormat<"h", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"9">();
  });

  it("should correctly infer the output type for 'hh'", () => {
    type Result = SimpleFormat<"hh", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"09">();
  });

  it("should correctly infer the output type for 'm'", () => {
    type Result = SimpleFormat<"m", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"6">();
  });

  it("should correctly infer the output type for 'mm'", () => {
    type Result = SimpleFormat<"mm", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"06">();
  });

  it("should correctly infer the output type for 's'", () => {
    type Result = SimpleFormat<"s", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"9">();
  });

  it("should correctly infer the output type for 'ss'", () => {
    type Result = SimpleFormat<"ss", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"09">();
  });

  it("should correctly infer the output type for 'SSS'", () => {
    type Result = SimpleFormat<"SSS", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"999">();
  });

  it("should correctly infer the output type for 'Z'", () => {
    type Result = SimpleFormat<"Z", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"+00:00">();
  });

  it("should correctly infer the output type for 'ZZ'", () => {
    type Result = SimpleFormat<"ZZ", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"+0000">();
  });

  it("should correctly infer the output type for 'A'", () => {
    type Result = SimpleFormat<"A", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"PM">();
  });

  it("should correctly infer the output type for 'a'", () => {
    type Result = SimpleFormat<"a", DateFormat>;
    expectTypeOf<Result>().toEqualTypeOf<"pm">();
  });
});
