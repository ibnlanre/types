import { expectTypeOf, test } from "vitest";
import type { Floor } from "./Floor";

test("Floor should round up a positive number to the nearest integer", () => {
  expectTypeOf<Floor<0.3>>().toEqualTypeOf<0>();
  expectTypeOf<Floor<1.5>>().toEqualTypeOf<1>();
  expectTypeOf<Floor<2.8>>().toEqualTypeOf<2>();
});

test("Floor should round up a negative number to the nearest integer", () => {
  expectTypeOf<Floor<-2.7>>().toEqualTypeOf<-3>();
  expectTypeOf<Floor<-0.5>>().toEqualTypeOf<-1>();
});

test("Floor should round up zero to zero", () => {
  type Result = Floor<0>;
  expectTypeOf<Result>().toEqualTypeOf<0>();
});
