import { describe, expectTypeOf, it } from "vitest";
import type { SubtractCarryDigit } from "./SubtractCarryDigit";

describe("Subtract Carry Digit", () => {
  it("should subtract carry digit correctly", () => {
    expectTypeOf<SubtractCarryDigit<0, 0>>().toEqualTypeOf<0>();
    expectTypeOf<SubtractCarryDigit<1, 0>>().toEqualTypeOf<0>();
    expectTypeOf<SubtractCarryDigit<0, 1>>().toEqualTypeOf<1>();
    expectTypeOf<SubtractCarryDigit<5, 3, 1>>().toEqualTypeOf<0>();
    expectTypeOf<SubtractCarryDigit<9, 2, 1>>().toEqualTypeOf<0>();
  });
});
