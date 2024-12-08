import { describe, it, expectTypeOf } from "vitest";
import type { Exponentiate } from "./Exponentiate";

describe("Exponentiate", () => {
  it("should return 1 when exponent is 0", () => {
    type Result = Exponentiate<2, 0>;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should return the base when exponent is 1", () => {
    type Result = Exponentiate<2, 1>;
    expectTypeOf<Result>().toEqualTypeOf<2>();
  });

  it("should return the correct result for positive exponents", () => {
    type Result = Exponentiate<2, 3>;
    expectTypeOf<Result>().toEqualTypeOf<8>();
  });

  it("should return the correct result for negative exponents", () => {
    type Result = Exponentiate<2, -2>;
    expectTypeOf<Result>().toEqualTypeOf<0.25>();
  });

  it("should return the correct result for even exponents", () => {
    type Result = Exponentiate<3, 4>;
    expectTypeOf<Result>().toEqualTypeOf<81>();
  });

  it("should return the correct result for odd exponents", () => {
    type Result = Exponentiate<3, 3>;
    expectTypeOf<Result>().toEqualTypeOf<27>();
  });
});
