import { Apply } from "@ibnlanre/types";
import { describe, expectTypeOf, it } from "vitest";

import { Abs, TAbs } from "./Abs";

describe("Abs", () => {
  it("should return the absolute value of a positive number", () => {
    expectTypeOf<Abs<5>>().toEqualTypeOf<5>();
  });

  it("should return the absolute value of a negative number", () => {
    expectTypeOf<Abs<-10>>().toEqualTypeOf<10>();
  });

  it("should return 0 for zero input", () => {
    expectTypeOf<Abs<0>>().toEqualTypeOf<0>();
  });
});

describe("TAbs", () => {
  it("should fail when no argument is provided", () => {
    expectTypeOf<Apply<TAbs, [never]>>().toBeNever();
  });

  it("should return the absolute value of a positive number", () => {
    expectTypeOf<Apply<TAbs, [-5]>>().toEqualTypeOf<5>();
  });
});
