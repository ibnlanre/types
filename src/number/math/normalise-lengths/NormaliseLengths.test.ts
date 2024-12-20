import { describe, expectTypeOf, test } from "vitest";
import type { NormaliseLengths } from "./NormaliseLengths";

describe("NormaliseLengths", () => {
  test("NormaliseLengths should pad the left array when left is shorter", () => {
    type Result = NormaliseLengths<[1, 2], [3, 4, 5], "L">;
    expectTypeOf<Result>().toEqualTypeOf<[[0, 1, 2], [3, 4, 5]]>();
  });

  test("NormaliseLengths should pad the right array when right is shorter", () => {
    type Result = NormaliseLengths<[1, 2, 3], [4, 5], "R">;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 2, 3], [4, 5, 0]]>();
  });

  test("NormaliseLengths should not pad when both arrays have the same length", () => {
    type Result = NormaliseLengths<[1, 2, 3], [4, 5, 6], "L">;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 2, 3], [4, 5, 6]]>();
  });
});
