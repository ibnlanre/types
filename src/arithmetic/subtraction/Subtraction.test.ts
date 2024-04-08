import { describe, expectTypeOf, test } from "vitest";
import { Subtraction } from "./Subtraction";

describe("Subtraction", () => {
  test("Subtraction should subtract numbers correctly", () => {
    type Result = Subtraction<[10, 5, 2]>;
    expectTypeOf<Result>().toEqualTypeOf<3>();
  });

  test("Subtraction should handle single number", () => {
    type Result = Subtraction<[5]>;
    expectTypeOf<Result>().toEqualTypeOf<5>();
  });

  test("Subtraction should handle empty array", () => {
    type Result = Subtraction<[]>;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  test("Subtraction should handle negative numbers", () => {
    type Result = Subtraction<[-10, 5, -2]>;
    expectTypeOf<Result>().toEqualTypeOf<-13>();
  });
});
