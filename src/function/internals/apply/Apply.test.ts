import { expectTypeOf, test } from "vitest";
import type { TAdd, TSubstring } from "@ibnlanre/types";
import type { Apply } from "./Apply";

test("Apply should return string when Callback is a valid function", () => {
  type Result = Apply<TSubstring<0, 10>, [string]>;
  expectTypeOf<Result>().toBeString();
});

test("Apply should return number when Callback is a valid function", () => {
  type Result = Apply<TAdd, [[number, number]]>;
  expectTypeOf<Result>().toBeNumber();
});
