import { describe, expectTypeOf, it } from "vitest";
import type { Trunc } from "./Trunc";

describe("Trunc", () => {
  it("should correctly truncate positive numbers", () => {
    expectTypeOf<Trunc<10>>().toEqualTypeOf<10>();
    expectTypeOf<Trunc<10.5>>().toEqualTypeOf<10>();
    expectTypeOf<Trunc<10.9>>().toEqualTypeOf<10>();
  });

  it("should correctly truncate negative numbers", () => {
    expectTypeOf<Trunc<-10>>().toEqualTypeOf<-10>();
    expectTypeOf<Trunc<-10.5>>().toEqualTypeOf<-10>();
    expectTypeOf<Trunc<-10.9>>().toEqualTypeOf<-10>();
  });

  it("should return 0 for zero", () => {
    expectTypeOf<Trunc<0>>().toEqualTypeOf<0>();
  });
});
