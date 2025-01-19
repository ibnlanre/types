import { describe, expectTypeOf, it } from "vitest";

import type { Call } from "@ibnlanre/types";
import type { Enumerate, TEnumerate } from "./Enumerate";

describe("Enumerate", () => {
  it("should enumerate numbers from 0 to 10", () => {
    type Result = Enumerate<0, 10>;
    type TResult = Call<TEnumerate<0, 10>>;

    expectTypeOf<Result>().toEqualTypeOf<[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]>();
    expectTypeOf<TResult>().toEqualTypeOf<[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]>();
  });

  it("should enumerate numbers from 5 to 15", () => {
    type Result = Enumerate<5, 15>;
    type TResult = Call<TEnumerate<5, 15>>;

    expectTypeOf<Result>().toEqualTypeOf<[5, 6, 7, 8, 9, 10, 11, 12, 13, 14]>();
    expectTypeOf<TResult>().toEqualTypeOf<
      [5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    >();
  });

  it("should enumerate numbers from 3 to 3 (empty array)", () => {
    type Result = Enumerate<3, 3>;
    type TResult = Call<TEnumerate<3, 3>>;

    expectTypeOf<Result>().toEqualTypeOf<[]>();
    expectTypeOf<TResult>().toEqualTypeOf<[]>();
  });

  it("should enumerate numbers from 0 to 5", () => {
    type Result = Enumerate<0, 5>;
    type TResult = Call<TEnumerate<0, 5>>;

    expectTypeOf<Result>().toEqualTypeOf<[0, 1, 2, 3, 4]>();
    expectTypeOf<TResult>().toEqualTypeOf<[0, 1, 2, 3, 4]>();
  });

  it("should enumerate numbers from 7 to 10", () => {
    type Result = Enumerate<7, 10>;
    type TResult = Call<TEnumerate<7, 10>>;

    expectTypeOf<Result>().toEqualTypeOf<[7, 8, 9]>();
    expectTypeOf<TResult>().toEqualTypeOf<[7, 8, 9]>();
  });

  it("should enumerate numbers from 0 to 0 (empty array)", () => {
    type Result = Enumerate<0, 0>;
    type TResult = Call<TEnumerate<0, 0>>;

    expectTypeOf<Result>().toEqualTypeOf<[]>();
    expectTypeOf<TResult>().toEqualTypeOf<[]>();
  });
});
