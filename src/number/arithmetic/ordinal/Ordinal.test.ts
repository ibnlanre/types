import { describe, expectTypeOf, it } from "vitest";
import { Ordinal } from "./Ordinal";

describe("Ordinal", () => {
  it("should correctly infer the output type for positive numbers", () => {
    type Result = Ordinal<1>;
    expectTypeOf<Result>().toEqualTypeOf<"1st">();
  });

  it("should correctly infer the output type for zero", () => {
    type Result = Ordinal<0>;
    expectTypeOf<Result>().toEqualTypeOf<"0th">();
  });

  it("should correctly infer the output type for negative numbers", () => {
    type Result = Ordinal<-2>;
    expectTypeOf<Result>().toEqualTypeOf<"-2nd">();
  });

  it("should correctly infer the output type for numbers greater than 10", () => {
    type Result = Ordinal<11>;
    expectTypeOf<Result>().toEqualTypeOf<"11th">();
  });

  it("should correctly infer the output type greater than 20", () => {
    type Result = Ordinal<23>;
    expectTypeOf<Result>().toEqualTypeOf<"23rd">();
  });

  it("should correctly infer the output type for numbers less than 10", () => {
    type Result = Ordinal<5>;
    expectTypeOf<Result>().toEqualTypeOf<"5th">();
  });

  it("should correctly infer the output type for numbers greater than 60", () => {
    type Result = Ordinal<61>;
    expectTypeOf<Result>().toEqualTypeOf<"61st">();
  });

  it("should correctly infer the output type for numbers greater than 100", () => {
    type Result = Ordinal<103>;
    expectTypeOf<Result>().toEqualTypeOf<"103rd">();
  });
});
