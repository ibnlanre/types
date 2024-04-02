import { describe, expectTypeOf, it } from "vitest";
import type { Quotient } from "./Quotient";

describe("Quotient", () => {
  it("should correctly calculate the Euclidean division", () => {
    expectTypeOf<Quotient<10, 3, "Euclidean">>().toEqualTypeOf<3>();
    expectTypeOf<Quotient<-10, 3, "Euclidean">>().toEqualTypeOf<-4>();
  });

  it("should correctly calculate the Truncating division", () => {
    expectTypeOf<Quotient<10, 3, "Truncating">>().toEqualTypeOf<3>();
    expectTypeOf<Quotient<-10, 3, "Truncating">>().toEqualTypeOf<-3>();
  });

  it("should correctly calculate the Floored division", () => {
    expectTypeOf<Quotient<10, 3, "Floored">>().toEqualTypeOf<3>();
    expectTypeOf<Quotient<-10, 3, "Floored">>().toEqualTypeOf<-4>();
  });

  it("should throw an error for an invalid type", () => {
    expectTypeOf<Quotient<10, 3, never>>().toBeNever();
  });
});
