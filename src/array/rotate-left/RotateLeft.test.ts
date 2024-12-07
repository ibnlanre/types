import { describe, expectTypeOf, test } from "vitest";
import type { RotateLeft } from "./RotateLeft";

describe("RotateLeft", () => {
  test("RotateLeft should rotate the elements of an array to the left", () => {
    type Result = RotateLeft<[1, 2, 3], 1>;
    expectTypeOf<Result>().toEqualTypeOf<[1, 3, 2]>();
  });

  test("RotateLeft should handle empty arrays", () => {
    type Result = RotateLeft<[]>;
    expectTypeOf<Result>().toEqualTypeOf<[]>();
  });

  test("RotateLeft should handle pivot greater than array length", () => {
    type Result = RotateLeft<[1, 2, 3], 5>;
    expectTypeOf<Result>().toEqualTypeOf<[1, 2, 3]>();
  });

  test("RotateLeft should handle pivot less than zero", () => {
    type Result = RotateLeft<[1, 2, 3], -2>;
    expectTypeOf<Result>().toEqualTypeOf<[1, 3, 2]>();
  });
});
