import { ArrayOf, Fn, Indices, Size, GtOrEq, Subtract } from "@ibnlanre/types";

type IndexAtHelper<
  List extends unknown[],
  Index extends number
> = `${Index}` extends `-${infer Index extends number}`
  ? Subtract<Size<List>, Index> extends infer Index
    ? Index extends number
      ? GtOrEq<Index, 0> extends 1
        ? Index
        : never
      : never
    : never
  : Indices<List> extends infer Keys
  ? Index extends Keys
    ? Index
    : never
  : never;

export type IndexAt<
  List extends unknown,
  Index extends number
> = List extends unknown[]
  ? IndexAtHelper<List, Index>
  : List extends number
  ? IndexAtHelper<ArrayOf<List>, Index>
  : never;

export interface TIndexAt<
  Index extends number | void = void,
  List extends unknown[] | number | void = void
> extends Fn<{
    0: number;
    1: unknown[] | number;
  }> {
  slot: [Index, List];
  data: IndexAt<this[1], this[0]>;
}
