import { describe, expectTypeOf, test } from "vitest";
import { PadEnd } from "./PadEnd";

describe("PadEnd", () => {
  test("PadEnd should correctly pad the list with the specified value", () => {
    type Result = PadEnd<[1, 2, 3], 6, 0>;
    expectTypeOf<Result>().toEqualTypeOf<[1, 2, 3, 0, 0, 0]>();
  });

  test("PadEnd should return the original list if the length is already equal", () => {
    type Result = PadEnd<[1, 2, 3], 3, 0>;
    expectTypeOf<Result>().toEqualTypeOf<[1, 2, 3]>();
  });

  test("PadEnd should work with empty lists", () => {
    type Result = PadEnd<[], 5, 0>;
    expectTypeOf<Result>().toEqualTypeOf<[0, 0, 0, 0, 0]>();
  });
});
