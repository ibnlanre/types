import { expectTypeOf, test } from "vitest";
import { Sign } from "./Sign";

test("Sign should return 1 for positive numbers", () => {
  expectTypeOf<Sign<5>>().toEqualTypeOf<1>();
  expectTypeOf<Sign<0.5>>().toEqualTypeOf<1>();
  expectTypeOf<Sign<0>>().toEqualTypeOf<1>();
});

test("Sign should return -1 for negative numbers", () => {
  expectTypeOf<Sign<-5>>().toEqualTypeOf<-1>();
  expectTypeOf<Sign<-0.5>>().toEqualTypeOf<-1>();
});
