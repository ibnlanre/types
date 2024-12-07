import { describe, expectTypeOf, it } from "vitest";
import type { AddCarryDigit } from "./AddCarryDigit";

describe("Add Carry Digit", () => {
  it("should add carry digit correctly", () => {
    expectTypeOf<AddCarryDigit<0, 0>>().toEqualTypeOf<0>();
    expectTypeOf<AddCarryDigit<1, 8, 1>>().toEqualTypeOf<1>();
    expectTypeOf<AddCarryDigit<0, 1>>().toEqualTypeOf<0>();
    expectTypeOf<AddCarryDigit<7, 3, 1>>().toEqualTypeOf<1>();
    expectTypeOf<AddCarryDigit<5, 5>>().toEqualTypeOf<1>();
    expectTypeOf<AddCarryDigit<7, 6, 1>>().toEqualTypeOf<1>();
    expectTypeOf<AddCarryDigit<1, 8>>().toEqualTypeOf<0>();
    expectTypeOf<AddCarryDigit<9, 1, 1>>().toEqualTypeOf<1>();
  });
});
