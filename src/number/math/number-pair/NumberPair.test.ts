import { describe, expectTypeOf, test } from "vitest";
import type { NumberPair } from "./NumberPair";

describe("NumberPair", () => {
  test("NumberPair should create a pair of arrays", () => {
    type Result = NumberPair<[1, 2], [3, 4, 5]>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 2], [3, 4, 5]]>();
  });

  test("NumberPair should enforce the type constraint on the left array", () => {
    type Result = NumberPair<[1, 2, 3], [4, 5]>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 2, 3], [4, 5]]>();
  });

  test("NumberPair should enforce the type constraint on the right array", () => {
    type Result = NumberPair<[1, 2], [3, 4, 5, 6]>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 2], [3, 4, 5, 6]]>();
  });
});
