import { describe, expectTypeOf, test } from "vitest";
import type { Division } from "./Division";

describe("Division", () => {
  test("Division should divide numbers correctly", () => {
    type Result = Division<[10, 2, 5]>;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  test("Division should handle empty array", () => {
    type Result = Division<[]>;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  test("Division should handle single number", () => {
    type Result = Division<[10]>;
    expectTypeOf<Result>().toEqualTypeOf<10>();
  });

  test("Division should handle negative numbers", () => {
    type Result = Division<[-10, 2, -5]>;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  test("Division should handle zero", () => {
    type Result = Division<[10, 0, 5]>;
    expectTypeOf<Result>().toBeNever();
  });
});
