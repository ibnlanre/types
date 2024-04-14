import { expectTypeOf, test } from "vitest";
import { Round } from "./Round";

test("Round should round up a positive number to the nearest integer", () => {
  expectTypeOf<Round<0.3>>().toEqualTypeOf<0>();
  expectTypeOf<Round<1.5>>().toEqualTypeOf<2>();
  expectTypeOf<Round<2.8>>().toEqualTypeOf<3>();
});

test("Round should round up a negative number to the nearest integer", () => {
  expectTypeOf<Round<-2.7>>().toEqualTypeOf<-3>();
  expectTypeOf<Round<-0.5, "AwayFromZero">>().toEqualTypeOf<-1>();
  expectTypeOf<Round<-0.5, "ToEven">>().toEqualTypeOf<0>();
});

test("Round should round up zero to zero", () => {
  type Result = Round<0>;
  expectTypeOf<Result>().toEqualTypeOf<0>();
});
