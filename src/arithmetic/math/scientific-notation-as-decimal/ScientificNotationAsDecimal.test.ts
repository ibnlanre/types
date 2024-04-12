import { describe, expectTypeOf, test } from "vitest";
import { ScientificNotationAsDecimal } from "./ScientificNotationAsDecimal";

describe("ScientificNotationAsDecimal", () => {
  // test("Should convert scientific notation to decimal", () => {
  //   type Result = ScientificNotationAsDecimal<"1e-2">;
  //   expectTypeOf<Result>().toEqualTypeOf<"+0.01">();
  // });
  // test("Should handle positive exponent", () => {
  //   type Result = ScientificNotationAsDecimal<"2e3">;
  //   expectTypeOf<Result>().toEqualTypeOf<"2000">();
  // });
  // test("Should handle zero exponent", () => {
  //   type Result = ScientificNotationAsDecimal<"5e0">;
  //   expectTypeOf<Result>().toEqualTypeOf<"5">();
  // });
  // test("Should handle negative significand", () => {
  //   type Result = ScientificNotationAsDecimal<"-1e-2">;
  //   expectTypeOf<Result>().toEqualTypeOf<"-0.01">();
  // });
  // test("Should handle decimal significand", () => {
  //   type Result = ScientificNotationAsDecimal<"1.5e2">;
  //   expectTypeOf<Result>().toEqualTypeOf<"150">();
  // });
  // test("Should handle non-numeric input", () => {
  //   type Result = ScientificNotationAsDecimal<"abc">;
  //   expectTypeOf<Result>().toEqualTypeOf<"abc">();
  // });
});
