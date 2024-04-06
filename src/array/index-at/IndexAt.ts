import { ArrayOf, Fn, Indices, Size } from "@ibnlanre/types";
import { GtOrEq, Subtract } from "ts-arithmetic";

type IndexAtHelper<
  List extends any[],
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
  List extends any[] | number,
  Index extends number
> = List extends any[]
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
