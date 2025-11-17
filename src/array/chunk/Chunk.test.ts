import { describe, expectTypeOf, it } from "vitest";

import type { Call } from "@ibnlanre/types";
import type { Chunk, TChunk } from "./Chunk";

describe("Chunk", () => {
  it("should return an empty array when start equals end", () => {
    type Result = Chunk<5, 5>;
    type TResult = Call<TChunk<5, 5>>;

    expectTypeOf<Result>().toEqualTypeOf<[]>();
    expectTypeOf<TResult>().toEqualTypeOf<[]>();
  });

  it("splits range 0 to 6 into two chunks", () => {
    type Result = Chunk<0, 6>;
    expectTypeOf<Result>().toEqualTypeOf<[[0, 6]]>();
  });

  it("reverse range 6 to 0 yields same chunks", () => {
    type Result = Chunk<6, 0>;
    expectTypeOf<Result>().toEqualTypeOf<[[0, 6]]>();
  });

  it("single element range yields one chunk", () => {
    type Result = Chunk<0, 1>;
    expectTypeOf<Result>().toEqualTypeOf<[[0, 1]]>();
  });

  it("empty range yields empty array", () => {
    type Result = Chunk<2, 2>;
    expectTypeOf<Result>().toEqualTypeOf<[]>();
  });

  it("handles negative ranges", () => {
    type Result = Chunk<-10, 10>;
    expectTypeOf<Result>().toEqualTypeOf<[[-10, 0], [0, 10]]>();
  });

  it("should return chunks when start is less than end", () => {
    type Result = Chunk<0, 10>;
    type TResult = Call<TChunk<0, 10>>;

    expectTypeOf<Result>().toEqualTypeOf<[[0, 5], [5, 10]]>();
    expectTypeOf<TResult>().toEqualTypeOf<[[0, 5], [5, 10]]>();
  });

  it("should return chunks when start is greater than end", () => {
    type Result = Chunk<10, 0>;
    type TResult = Call<TChunk<10, 0>>;

    expectTypeOf<Result>().toEqualTypeOf<[[0, 5], [5, 10]]>();
    expectTypeOf<TResult>().toEqualTypeOf<[[0, 5], [5, 10]]>();
  });

  it("should handle negative ranges", () => {
    type Result = Chunk<-10, 10>;
    type TResult = Call<TChunk<-10, 10>>;

    expectTypeOf<Result>().toEqualTypeOf<[[-10, 0], [0, 10]]>();
    expectTypeOf<TResult>().toEqualTypeOf<[[-10, 0], [0, 10]]>();
  });
});
