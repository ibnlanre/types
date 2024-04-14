import { describe, expectTypeOf, it } from "vitest";
import type { Divide } from "./Divide";

describe("Divide", () => {
  it("should correctly calculate the Euclidean division", () => {
    expectTypeOf<Divide<10, 3, "Euclidean">>().toEqualTypeOf<3>();
    expectTypeOf<Divide<-10, 3, "Euclidean">>().toEqualTypeOf<-4>();
  });

  it("should correctly calculate the Truncating division", () => {
    expectTypeOf<Divide<10, 3, "Truncating">>().toEqualTypeOf<3>();
    expectTypeOf<Divide<-10, 3, "Truncating">>().toEqualTypeOf<-3>();
  });

  it("should correctly calculate the Floored division", () => {
    expectTypeOf<Divide<10, 3, "Floored">>().toEqualTypeOf<3>();
    expectTypeOf<Divide<-10, 3, "Floored">>().toEqualTypeOf<-4>();
  });

  it("should throw an error for an invalid type", () => {
    expectTypeOf<Divide<10, 3, never>>().toBeNever();
  });
});
