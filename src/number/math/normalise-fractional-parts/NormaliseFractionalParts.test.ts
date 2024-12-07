import { describe, expectTypeOf, test } from "vitest";
import type { NormaliseFractionalParts } from "./NormaliseFractionalParts";

describe("NormaliseFractionalParts", () => {
  test("NormaliseFractionalParts should pad the left array when left is shorter", () => {
    type Result = NormaliseFractionalParts<[1, 2], [3, 4, 5]>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 2, 0], [3, 4, 5]]>();
  });

  test("NormaliseFractionalParts should pad the right array when right is shorter", () => {
    type Result = NormaliseFractionalParts<[1, 2, 3], [4, 5]>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 2, 3], [4, 5, 0]]>();
  });

  test("NormaliseFractionalParts should not pad when both arrays have the same length", () => {
    type Result = NormaliseFractionalParts<[1, 2, 3], [4, 5, 6]>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 2, 3], [4, 5, 6]]>();
  });
});
