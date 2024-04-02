import { describe, expectTypeOf, it } from "vitest";
import { Flat } from "./Flat";

describe("Flat", () => {
  it("should flatten a nested array", () => {
    type Input = [[1, 2], [3, 4], [5, 6]];
    type Expected = [1, 2, 3, 4, 5, 6];

    expectTypeOf<Flat<Input>>().toEqualTypeOf<Expected>();
  });

  it("should handle an empty array", () => {
    type Input = [];
    type Expected = [];

    expectTypeOf<Flat<Input>>().toEqualTypeOf<Expected>();
  });

  it("should handle a single-level array", () => {
    type Input = [1, 2, 3, [4, 5], 6, 7];
    type Expected = [1, 2, 3, 4, 5, 6, 7];

    expectTypeOf<Flat<Input>>().toEqualTypeOf<Expected>();
  });

  it("should handle a mixed nested array", () => {
    type Input = [[1, 2], [3], [4, [5, 6]]];
    type Expected = [1, 2, 3, 4, [5, 6]];

    expectTypeOf<Flat<Input>>().toEqualTypeOf<Expected>();
  });
});
