import { describe, it, expectTypeOf } from "vitest";
import { DaysInMonth } from "./DaysInMonth";

describe("DaysInMonth", () => {
  it("should correctly infer the number of days in February for a non-leap year", () => {
    type Result = DaysInMonth<2, 2021>;
    expectTypeOf<Result>().toEqualTypeOf<28>();
  });

  it("should correctly infer the number of days in February for a leap year", () => {
    type Result = DaysInMonth<2, 2020>;
    expectTypeOf<Result>().toEqualTypeOf<29>();
  });

  it("should correctly infer the number of days in April", () => {
    type Result = DaysInMonth<4, 2021>;
    expectTypeOf<Result>().toEqualTypeOf<30>();
  });

  it("should correctly infer the number of days in June", () => {
    type Result = DaysInMonth<6, 2021>;
    expectTypeOf<Result>().toEqualTypeOf<30>();
  });

  it("should correctly infer the number of days in September", () => {
    type Result = DaysInMonth<9, 2021>;
    expectTypeOf<Result>().toEqualTypeOf<30>();
  });

  it("should correctly infer the number of days in November", () => {
    type Result = DaysInMonth<11, 2021>;
    expectTypeOf<Result>().toEqualTypeOf<30>();
  });

  it("should correctly infer the number of days in January", () => {
    type Result = DaysInMonth<1, 2021>;
    expectTypeOf<Result>().toEqualTypeOf<31>();
  });

  it("should correctly infer the number of days in March", () => {
    type Result = DaysInMonth<3, 2021>;
    expectTypeOf<Result>().toEqualTypeOf<31>();
  });

  it("should correctly infer the number of days in May", () => {
    type Result = DaysInMonth<5, 2021>;
    expectTypeOf<Result>().toEqualTypeOf<31>();
  });

  it("should correctly infer the number of days in July", () => {
    type Result = DaysInMonth<7, 2021>;
    expectTypeOf<Result>().toEqualTypeOf<31>();
  });

  it("should correctly infer the number of days in August", () => {
    type Result = DaysInMonth<8, 2021>;
    expectTypeOf<Result>().toEqualTypeOf<31>();
  });

  it("should correctly infer the number of days in October", () => {
    type Result = DaysInMonth<10, 2021>;
    expectTypeOf<Result>().toEqualTypeOf<31>();
  });

  it("should correctly infer the number of days in December", () => {
    type Result = DaysInMonth<12, 2021>;
    expectTypeOf<Result>().toEqualTypeOf<31>();
  });
});
