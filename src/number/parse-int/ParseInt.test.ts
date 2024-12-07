import { describe, expectTypeOf, it } from "vitest";
import type { ParseInt } from "./ParseInt";

// https://github.com/microsoft/TypeScript/issues/57404
// https://tsplay.dev/weAbgw

describe("ParseInt", () => {
  it("should parse number input as float by default", () => {
    expectTypeOf<ParseInt<123>>().toEqualTypeOf<123>();
  });

  it("should parse number input as integer when specified", () => {
    expectTypeOf<ParseInt<123, "Signed", "Integer">>().toEqualTypeOf<123>();
  });

  it("should parse string input as float by default", () => {
    expectTypeOf<ParseInt<"456">>().toEqualTypeOf<456>();
  });

  it("should parse string input as integer when specified", () => {
    expectTypeOf<ParseInt<"456", "Signed", "Integer">>().toEqualTypeOf<456>();
  });

  it("should parse boolean input as float by default", () => {
    expectTypeOf<ParseInt<true>>().toEqualTypeOf<1>();
    expectTypeOf<ParseInt<false>>().toEqualTypeOf<0>();
  });

  it("should parse boolean input as integer when specified", () => {
    expectTypeOf<ParseInt<true, "Signed", "Integer">>().toEqualTypeOf<1>();
    expectTypeOf<ParseInt<false, "Signed", "Integer">>().toEqualTypeOf<0>();
  });

  it("should return never for unsupported input types", () => {
    expectTypeOf<ParseInt<"abc">>().toEqualTypeOf<0>();
  });

  it("should parse negative number input as float by default", () => {
    expectTypeOf<ParseInt<-123>>().toEqualTypeOf<-123>();
  });

  it("should parse negative number input as integer when specified", () => {
    expectTypeOf<ParseInt<-123, "Signed", "Integer">>().toEqualTypeOf<-123>();
  });

  it("should parse negative exponential input as float by default", () => {
    expectTypeOf<ParseInt<"1e-3">>().toEqualTypeOf<0.001>();
    expectTypeOf<
      ParseInt<"-1.324e-8">
    >().toEqualTypeOf<-0.00000001324>();
  });
});
