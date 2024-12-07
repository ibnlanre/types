import { describe, expectTypeOf, test } from "vitest";
import type { LastRow } from "./LastRow";

describe("LastRow", () => {
  test("LastRow should return the last row of a table", () => {
    type Table = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    type Result = LastRow<Table>;
    expectTypeOf<Result>().toEqualTypeOf<[7, 8, 9]>();
  });

  test("LastRow should handle tables with a single row", () => {
    type Table = [[1, 2, 3]];
    type Result = LastRow<Table>;
    expectTypeOf<Result>().toEqualTypeOf<[1, 2, 3]>();
  });

  test("LastRow should handle empty tables", () => {
    type Table = [];
    type Result = LastRow<Table>;
    expectTypeOf<Result>().toEqualTypeOf<never>();
  });
});
