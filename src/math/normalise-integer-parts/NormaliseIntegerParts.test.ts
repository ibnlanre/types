import { describe, expectTypeOf, test } from "vitest";
import { NormaliseIntegerParts } from "./NormaliseIntegerParts";

describe("NormaliseIntegerParts", () => {
  test("NormaliseIntegerParts should pad the left array when left is shorter", () => {
    type Result = NormaliseIntegerParts<[1, 2], [3, 4, 5]>;
    expectTypeOf<Result>().toEqualTypeOf<[[0, 1, 2], [3, 4, 5]]>();
  });

  test("NormaliseIntegerParts should pad the right array when right is shorter", () => {
    type Result = NormaliseIntegerParts<[1, 2, 3], [4, 5]>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 2, 3], [0, 4, 5]]>();
  });

  test("NormaliseIntegerParts should not pad when both arrays have the same length", () => {
    type Result = NormaliseIntegerParts<[1, 2, 3], [4, 5, 6]>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 2, 3], [4, 5, 6]]>();
  });
});
