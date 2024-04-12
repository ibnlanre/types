import { describe, expectTypeOf, it } from "vitest";
import { AddDigit } from "./AddDigit";

describe("Add Digit Table", () => {
  it("should add digits correctly", () => {
    expectTypeOf<AddDigit<8, 1, 1>>().toEqualTypeOf<0>();
    expectTypeOf<AddDigit<5, 6, 1>>().toEqualTypeOf<2>();
    expectTypeOf<AddDigit<9, 5, 0>>().toEqualTypeOf<4>();
    expectTypeOf<AddDigit<7, 8, 1>>().toEqualTypeOf<6>();
  });
});
