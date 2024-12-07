import { expectTypeOf, test } from "vitest";
import type { Ceil } from "./Ceil";

test("Ceil should round up a positive number to the nearest integer", () => {
  expectTypeOf<Ceil<0.3>>().toEqualTypeOf<1>();
  expectTypeOf<Ceil<1.5>>().toEqualTypeOf<2>();
  expectTypeOf<Ceil<2.8>>().toEqualTypeOf<3>();
});

test("Ceil should round up a negative number to the nearest integer", () => {
  expectTypeOf<Ceil<-2.7>>().toEqualTypeOf<-2>();
  expectTypeOf<Ceil<-0.5>>().toEqualTypeOf<0>();
});

test("Ceil should round up zero to zero", () => {
  type Result = Ceil<0>;
  expectTypeOf<Result>().toEqualTypeOf<0>();
});
