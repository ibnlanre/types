import { describe, expectTypeOf, it } from "vitest";
import type { Elements } from "./Elements";

describe("Elements", () => {
  it("should return the element type", () => {
    type Result = Elements<[string]>;
    expectTypeOf<Result>().toEqualTypeOf<string>();
  });

  it("should return the tuple of element types", () => {
    type Result = Elements<[string, number, boolean]>;
    expectTypeOf<Result>().toEqualTypeOf<string | number | boolean>();
  });

  it("should return the array of specific element type", () => {
    type Result = Elements<string[]>;
    expectTypeOf<Result>().toEqualTypeOf<string>();
  });

  it("should return the union of element types", () => {
    type Result = Elements<(number | boolean)[]>;
    expectTypeOf<Result>().toEqualTypeOf<number | boolean>();
  });

  it("should return the elements in an empty array", () => {
    type Result = Elements<[]>;
    expectTypeOf<Result>().toEqualTypeOf<never>();
  });
});
