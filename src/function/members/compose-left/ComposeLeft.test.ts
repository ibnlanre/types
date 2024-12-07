import type { TAdd, TFlat, TSubtract } from "@ibnlanre/types";
import { describe, expectTypeOf, test } from "vitest";

import type { ComposeLeft } from "./ComposeLeft";

describe("ComposeLeft", () => {
  test("ComposeLeft should return never when the list is empty", () => {
    type Result = ComposeLeft<1, []>;
    expectTypeOf<Result>().toBeNever();
  });

  test("ComposeLeft should return never when the list provided is valid", () => {
    type Result = ComposeLeft<2, [TAdd<2>]>;
    expectTypeOf<Result>().toBeNever();
  });

  test("ComposeLeft should return description of the invalid function, if any", () => {
    type Result = ComposeLeft<3, [TSubtract<1>, TFlat]>;
    expectTypeOf<Result>().toEqualTypeOf<{
      position: 1;
      scenario: Error;
      callback: TFlat<void>;
      expected: unknown[];
      received: number;
    }>();
  });

  test("ComposeLeft should handle mulitple valid functions", () => {
    type Result = ComposeLeft<3, [TAdd<1>, TSubtract<2>]>;
    expectTypeOf<Result>().toBeNever();
  });
});
