import type { Call } from "@ibnlanre/types";
import { describe, expectTypeOf, it } from "vitest";
import type { Concat, TConcat } from "./Concat";

describe("Concat", () => {
  it("concatenates two non-empty tuples", () => {
    type Result = Concat<[1, 2], [3, 4]>;
    type TResult = Call<TConcat<[3, 4], [1, 2]>>;

    expectTypeOf<Result>().toEqualTypeOf<[1, 2, 3, 4]>();
    expectTypeOf<TResult>().toEqualTypeOf<[1, 2, 3, 4]>();
  });

  it("concatenates left non-empty with empty right", () => {
    type Result = Concat<[1], []>;
    type TResult = Call<TConcat<[], [1]>>;

    expectTypeOf<Result>().toEqualTypeOf<[1]>();
    expectTypeOf<TResult>().toEqualTypeOf<[1]>();
  });

  it("concatenates empty left with right non-empty", () => {
    type Result = Concat<[], ["a"]>;
    type TResult = Call<TConcat<["a"], []>>;

    expectTypeOf<Result>().toEqualTypeOf<["a"]>();
    expectTypeOf<TResult>().toEqualTypeOf<["a"]>();
  });

  it("concatenates empty with empty to empty", () => {
    type Result = Concat<[], []>;
    type TResult = Call<TConcat<[], []>>;

    expectTypeOf<Result>().toEqualTypeOf<[]>();
    expectTypeOf<TResult>().toEqualTypeOf<[]>();
  });

  it("preserves tuple literal types", () => {
    type Result = Concat<[1, "two"], [true]>;
    expectTypeOf<Result>().toEqualTypeOf<[1, "two", true]>();
  });
});
