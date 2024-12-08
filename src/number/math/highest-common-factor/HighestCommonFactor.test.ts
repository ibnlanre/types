import { expectTypeOf, describe, it } from "vitest";

import type { HighestCommonFactor } from "./HighestCommonFactor";

describe("HighestCommonFactor", () => {
  it("should calculate the highest common factor of two numbers", () => {
    type Result = HighestCommonFactor<12, 18>;
    expectTypeOf<Result>().toEqualTypeOf<6>();
  });

  it("should calculate the highest common factor of two numbers", () => {
    type Result = HighestCommonFactor<18, 12>;
    expectTypeOf<Result>().toEqualTypeOf<6>();
  });

  it("should calculate the highest common factor of two numbers", () => {
    type Result = HighestCommonFactor<18, 1>;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should calculate the highest common factor of two numbers", () => {
    type Result = HighestCommonFactor<1, 18>;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  it("should calculate the highest common factor of two numbers", () => {
    type Result = HighestCommonFactor<0, 18>;
    expectTypeOf<Result>().toEqualTypeOf<18>();
  });

  it("should calculate the highest common factor of two numbers", () => {
    type Result = HighestCommonFactor<18, 0>;
    expectTypeOf<Result>().toEqualTypeOf<18>();
  });
});
