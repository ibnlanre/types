import { describe, expectTypeOf, it } from "vitest";
import { SubtractDigit } from "./SubtractDigit";

describe("Subtract Digit", () => {
  it("should subtract digits correctly", () => {
    expectTypeOf<SubtractDigit<0, 0, 0>>().toEqualTypeOf<0>();
    expectTypeOf<SubtractDigit<1, 0, 0>>().toEqualTypeOf<1>();
    expectTypeOf<SubtractDigit<0, 1, 0>>().toEqualTypeOf<9>();
    expectTypeOf<SubtractDigit<5, 3, 1>>().toEqualTypeOf<1>();
    expectTypeOf<SubtractDigit<9, 2, 1>>().toEqualTypeOf<6>();
  });
});
