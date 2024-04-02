import { describe, expectTypeOf, it } from "vitest";
import { Select } from "./Select";

describe("Select", () => {
  it("should concatenate two empty arrays", () => {
    type Result = Select<[], []>;
    expectTypeOf<Result>().toEqualTypeOf<[]>();
  });

  it("should concatenate an empty array with a non-empty array", () => {
    type Result = Select<[], [1, 2, 3]>;
    expectTypeOf<Result>().toEqualTypeOf<[]>();
  });

  it("should concatenate a non-empty array with an empty array", () => {
    type Result = Select<[1, 2, 3], []>;
    expectTypeOf<Result>().toEqualTypeOf<[1, 2, 3]>();
  });

  it("should concatenate two non-empty arrays", () => {
    type Result = Select<[1, 2], [3, 4]>;
    expectTypeOf<Result>().toEqualTypeOf<[1, 2]>();
  });

  it("should handle arrays with void elements", () => {
    type Result = Select<[1, void, 3], [void, 5]>;
    expectTypeOf<Result>().toEqualTypeOf<[1, 5, 3]>();
  });

  it("should handle arrays with different lengths", () => {
    type Result = Select<[1, 2, 3], [4, 5]>;
    expectTypeOf<Result>().toEqualTypeOf<[1, 2, 3]>();
  });

  it("should handle arrays with different lengths and void elements", () => {
    type Result = Select<[1, void, 3], [4, 5, void]>;
    expectTypeOf<Result>().toEqualTypeOf<[1, 5, 3]>();
  });

  it("should handle a fully void array", () => {
    type Result = Select<[4, void, 2], [void]>;
    expectTypeOf<Result>().toEqualTypeOf<[4, 2]>();
  });
});
