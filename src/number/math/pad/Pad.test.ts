import { describe, expectTypeOf, test } from "vitest";
import type { Pad } from "./Pad";

describe("Pad", () => {
  test("Pad should pad the list on the left with the specified value", () => {
    type Result = Pad<[1, 2, 3], 5, "L">;
    expectTypeOf<Result>().toEqualTypeOf<[0, 0, 1, 2, 3]>();
  });

  test("Pad should pad the list on the right with the specified value", () => {
    type Result = Pad<[1, 2, 3], 5, "R">;
    expectTypeOf<Result>().toEqualTypeOf<[1, 2, 3, 0, 0]>();
  });

  test("Pad should handle empty list inputs", () => {
    type Result = Pad<[], 5, "L">;
    expectTypeOf<Result>().toEqualTypeOf<[0, 0, 0, 0, 0]>();
  });

  test("Pad should handle different pad lengths", () => {
    type Result = Pad<[1, 2, 3], 3, "L">;
    expectTypeOf<Result>().toEqualTypeOf<[1, 2, 3]>();
  });
});
