import type { TAdd, TFlat, TSubtract } from "@ibnlanre/types";
import { describe, expectTypeOf, test } from "vitest";

import type { Pipe } from "./Pipe";

describe("Pipe", () => {
  test("Pipe should return the input item when the list is empty", () => {
    type Result = Pipe<1, []>;
    expectTypeOf<Result>().toEqualTypeOf<1>();
  });

  test("Pipe should return the result of the composed functions when the list provided is valid", () => {
    type Result = Pipe<2, [TAdd<2>]>;
    expectTypeOf<Result>().toEqualTypeOf<4>();
  });

  test("Pipe should return description of the invalid function, if any", () => {
    type Result = Pipe<3, [TSubtract<1>, TFlat]>;
    expectTypeOf<Result>().toEqualTypeOf<{
      position: 1;
      scenario: Error;
      callback: TFlat<void>;
      expected: unknown[];
      received: number;
    }>();
  });

  test("Pipe should handle multiple valid functions", () => {
    type Result = Pipe<3, [TAdd<1>, TSubtract<2>]>;
    expectTypeOf<Result>().toEqualTypeOf<2>();
  });
});
