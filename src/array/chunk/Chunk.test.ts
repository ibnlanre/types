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
