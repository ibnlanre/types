import { Apply } from "@ibnlanre/types";
import { describe, expectTypeOf, it } from "vitest";

import { Absolute, TAbsolute } from "./Absolute";

describe("Absolute", () => {
  it("should return the absolute value of a positive number", () => {
    expectTypeOf<Absolute<5>>().toEqualTypeOf<5>();
  });

  it("should return the absolute value of a negative number", () => {
    expectTypeOf<Absolute<-10>>().toEqualTypeOf<10>();
  });

  it("should return 0 for zero input", () => {
    expectTypeOf<Absolute<0>>().toEqualTypeOf<0>();
  });
});

describe("TAbsolute", () => {
  it("should fail when no argument is provided", () => {
    expectTypeOf<Apply<TAbsolute, [never]>>().toBeNever();
  });

  it("should return the absolute value of a positive number", () => {
    expectTypeOf<Apply<TAbsolute, [-5]>>().toEqualTypeOf<5>();
  });
});
