import type { TAdd, TFlat, TSubtract } from "@ibnlanre/types";
import { describe, expectTypeOf, test } from "vitest";

import type { ComposeRight } from "./ComposeRight";

describe("ComposeRight", () => {
  test("ComposeRight should return an empty array when the list is empty", () => {
    type Result = ComposeRight<1, []>;
    expectTypeOf<Result>().toEqualTypeOf<[]>();
  });

  test("ComposeRight should return the input argument when the list contains a single function", () => {
    type Result = ComposeRight<2, [TAdd<2>]>;
    expectTypeOf<Result>().toMatchTypeOf<[TAdd<2>]>();
  });

  test("ComposeRight should return only the valid function based on the provided argument", () => {
    type Result = ComposeRight<3, [TSubtract<1>, TFlat]>;
    expectTypeOf<Result>().toEqualTypeOf<[TSubtract<1>]>();
  });

  test("ComposeRight should handle multiple valid function types", () => {
    type Result = ComposeRight<3, [TAdd<1>, TSubtract<2>]>;
    expectTypeOf<Result>().toEqualTypeOf<[TAdd<1>, TSubtract<2>]>();
  });
});
