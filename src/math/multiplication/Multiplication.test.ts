import { describe, expectTypeOf, test } from "vitest";
import { Multiplication } from "./Multiplication";

describe("Multiplication", () => {
  test("Multiplication should multiply numbers correctly", () => {
    type Result = Multiplication<[2, 3, 4]>;
    expectTypeOf<Result>().toEqualTypeOf<24>();
  });

  test("Multiplication should handle single number", () => {
    type Result = Multiplication<[5]>;
    expectTypeOf<Result>().toEqualTypeOf<5>();
  });

  test("Multiplication should handle empty array", () => {
    type Result = Multiplication<[]>;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  test("Multiplication should handle negative numbers", () => {
    type Result = Multiplication<[-2, 3, -4]>;
    expectTypeOf<Result>().toEqualTypeOf<24>();
  });
});
