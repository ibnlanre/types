import { describe, expectTypeOf, test } from "vitest";
import { IsInteger } from "./IsInteger";

describe("IsInteger", () => {
  test("IsInteger should return 1 for integer numbers", () => {
    type Result = IsInteger<42>;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  test("IsInteger should return 0 for decimal numbers", () => {
    type Result = IsInteger<3.14>;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });

  test("IsInteger should return 1 for zero", () => {
    type Result = IsInteger<0>;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  test("IsInteger should return 1 for negative integer numbers", () => {
    type Result = IsInteger<-10>;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  test("IsInteger should return 0 for negative decimal numbers", () => {
    type Result = IsInteger<-3.14>;
    expectTypeOf<Result>().toEqualTypeOf<0>();
  });
});
