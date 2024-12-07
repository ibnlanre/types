import type { Apply } from "@ibnlanre/types";
import { describe, expectTypeOf, it } from "vitest";

import type { Add, TAdd } from "./Add";

describe("Add", () => {
  it("should add two positive numbers", () => {
    expectTypeOf<Add<2, 3>>().toEqualTypeOf<5>();
  });

  it("should add a positive number and zero", () => {
    expectTypeOf<Add<5, 0>>().toEqualTypeOf<5>();
  });

  it("should add a negative number and zero", () => {
    expectTypeOf<Add<-10, 0>>().toEqualTypeOf<-10>();
  });

  it("should add a negative number and a positive number", () => {
    expectTypeOf<Add<-5, 10>>().toEqualTypeOf<5>();
  });
});

describe("TAdd", () => {
  it("should fail when no argument is provided", () => {
    expectTypeOf<Apply<TAdd, never>>().toBeNever();
  });

  it("should add two positive numbers", () => {
    expectTypeOf<Apply<TAdd, [[2, 3]]>>().toEqualTypeOf<5>();
  });

  it("should add a positive number and zero", () => {
    expectTypeOf<Apply<TAdd, [[5, 0]]>>().toEqualTypeOf<5>();
  });

  it("should add a negative number and zero", () => {
    expectTypeOf<Apply<TAdd, [[-10, 0]]>>().toEqualTypeOf<-10>();
  });

  it("should add a negative number and a positive number", () => {
    expectTypeOf<Apply<TAdd, [[-5, 10]]>>().toEqualTypeOf<5>();
  });
});
