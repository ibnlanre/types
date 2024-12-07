import { describe, expectTypeOf, test } from "vitest";
import type { SplitLeadingElements } from "./SplitLeadingElements";

describe("SplitLeadingElements", () => {
  test("SplitLeadingElements should split leading elements of a list", () => {
    type Result = SplitLeadingElements<[1, 2, 3, 4, 5], 1>;
    expectTypeOf<Result>().toEqualTypeOf<[[1], [2, 3, 4, 5]]>();
  });

  test("SplitLeadingElements should handle empty list", () => {
    type Result = SplitLeadingElements<[], 1>;
    expectTypeOf<Result>().toEqualTypeOf<[[], []]>();
  });

  test("SplitLeadingElements should handle list with no leading elements", () => {
    type Result = SplitLeadingElements<[1, 2, 3, 4, 5], 0>;
    expectTypeOf<Result>().toEqualTypeOf<[[], [1, 2, 3, 4, 5]]>();
  });

  test("SplitLeadingElements should handle list with multiple leading elements", () => {
    type Result = SplitLeadingElements<[1, 1, 2, 3, 4, 5], 1>;
    expectTypeOf<Result>().toEqualTypeOf<[[1, 1], [2, 3, 4, 5]]>();
  });

  test("SplitLeadingElements should handle list with no occurrences of the element", () => {
    type Result = SplitLeadingElements<[1, 2, 3, 4, 5], 0>;
    expectTypeOf<Result>().toEqualTypeOf<[[], [1, 2, 3, 4, 5]]>();
  });
});
