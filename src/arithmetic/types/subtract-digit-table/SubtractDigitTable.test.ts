import { describe, expectTypeOf, it } from "vitest";
import { SubtractDigitTable } from "./SubtractDigitTable";

describe("Add Digit Table", () => {
  it("should match this signature", () => {
    expectTypeOf<SubtractDigitTable>().toEqualTypeOf<
      [
        [
          [0, 9, 8, 7, 6, 5, 4, 3, 2, 1],
          [1, 0, 9, 8, 7, 6, 5, 4, 3, 2],
          [2, 1, 0, 9, 8, 7, 6, 5, 4, 3],
          [3, 2, 1, 0, 9, 8, 7, 6, 5, 4],
          [4, 3, 2, 1, 0, 9, 8, 7, 6, 5],
          [5, 4, 3, 2, 1, 0, 9, 8, 7, 6],
          [6, 5, 4, 3, 2, 1, 0, 9, 8, 7],
          [7, 6, 5, 4, 3, 2, 1, 0, 9, 8],
          [8, 7, 6, 5, 4, 3, 2, 1, 0, 9],
          [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
        ],
        [
          [9, 8, 7, 6, 5, 4, 3, 2, 1, 0],
          [0, 9, 8, 7, 6, 5, 4, 3, 2, 1],
          [1, 0, 9, 8, 7, 6, 5, 4, 3, 2],
          [2, 1, 0, 9, 8, 7, 6, 5, 4, 3],
          [3, 2, 1, 0, 9, 8, 7, 6, 5, 4],
          [4, 3, 2, 1, 0, 9, 8, 7, 6, 5],
          [5, 4, 3, 2, 1, 0, 9, 8, 7, 6],
          [6, 5, 4, 3, 2, 1, 0, 9, 8, 7],
          [7, 6, 5, 4, 3, 2, 1, 0, 9, 8],
          [8, 7, 6, 5, 4, 3, 2, 1, 0, 9]
        ]
      ]
    >();
  });
});
