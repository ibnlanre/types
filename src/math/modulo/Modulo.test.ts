import { expectTypeOf, test } from "vitest";
import { Modulo } from "./Modulo";

test("Modulo should calculate the remainder of dividing two numbers", () => {
  // Test case 1: Modulo<10, 3> should be 1
  expectTypeOf<Modulo<10, 3>>().toEqualTypeOf<1>();

  // Test case 2: Modulo<15, 4> should be 3
  expectTypeOf<Modulo<15, 4>>().toEqualTypeOf<3>();

  // Test case 3: Modulo<7, 2> should be 1
  expectTypeOf<Modulo<7, 2>>().toEqualTypeOf<1>();
});

test("Modulo should handle negative numbers correctly", () => {
  // Test case 1: Modulo<-10, 3> should be -1
  expectTypeOf<Modulo<-10, 3>>().toEqualTypeOf<2>();

  // Test case 2: Modulo<10, -3> should be 1
  expectTypeOf<Modulo<10, -3>>().toEqualTypeOf<-2>();

  // Test case 3: Modulo<-10, -3> should be -1
  expectTypeOf<Modulo<-10, -3>>().toEqualTypeOf<-1>();
});

test("Modulo should handle zero correctly", () => {
  // Test case 1: Modulo<0, 5> should be 0
  expectTypeOf<Modulo<0, 5>>().toEqualTypeOf<0>();

  // Test case 2: Modulo<10, 0> should be NaN (not a number)
  expectTypeOf<Modulo<10, 0>>().toEqualTypeOf<never>();
});
