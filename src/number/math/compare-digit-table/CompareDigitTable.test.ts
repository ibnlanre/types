import { describe, expectTypeOf, test } from "vitest";
import { CompareDigitTable } from "./CompareDigitTable";

describe("CompareDigitTable", () => {
  test("should match this signature", () => {
    expectTypeOf<CompareDigitTable>().toEqualTypeOf<
      [
        [0, -1, -1, -1, -1, -1, -1, -1, -1, -1],
        [1, 0, -1, -1, -1, -1, -1, -1, -1, -1],
        [1, 1, 0, -1, -1, -1, -1, -1, -1, -1],
        [1, 1, 1, 0, -1, -1, -1, -1, -1, -1],
        [1, 1, 1, 1, 0, -1, -1, -1, -1, -1],
        [1, 1, 1, 1, 1, 0, -1, -1, -1, -1],
        [1, 1, 1, 1, 1, 1, 0, -1, -1, -1],
        [1, 1, 1, 1, 1, 1, 1, 0, -1, -1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, -1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0]
      ]
    >();
  });
});
