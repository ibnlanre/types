import { describe, expectTypeOf, test } from "vitest";
import { PadStart } from "./PadStart";

describe("PadStart", () => {
  test("PadStart should correctly pad the list with the specified value", () => {
    type Result = PadStart<[1, 2, 3], 6, 0>;
    expectTypeOf<Result>().toEqualTypeOf<[0, 0, 0, 1, 2, 3]>();
  });

  test("PadStart should return the original list if the length is already equal", () => {
    type Result = PadStart<[1, 2, 3], 3, 0>;
    expectTypeOf<Result>().toEqualTypeOf<[1, 2, 3]>();
  });

  test("PadStart should work with empty lists", () => {
    type Result = PadStart<[], 5, 0>;
    expectTypeOf<Result>().toEqualTypeOf<[0, 0, 0, 0, 0]>();
  });
});
