import {
  ArrayOf,
  Fn,
  GreaterThanOrEqual,
  Indices,
  Size,
  Subtract,
} from "@ibnlanre/types";

type LocateHelper<
  List extends unknown[],
  Index extends number
> = `${Index}` extends `-${infer Index extends number}`
  ? Subtract<Size<List>, Index> extends infer Index
    ? Index extends number
      ? GreaterThanOrEqual<Index, 0> extends 1
        ? Index
        : never
      : never
    : never
  : Indices<List> extends infer Keys
  ? Index extends Keys
    ? Index
    : never
  : never;

export type Locate<
  List extends unknown,
  Index extends number
> = List extends unknown[]
  ? LocateHelper<List, Index>
  : List extends number
  ? LocateHelper<ArrayOf<List>, Index>
  : never;

export interface TLocate<
  Index extends number | void = void,
  List extends unknown[] | number | void = void
> extends Fn<{
    0: number;
    1: unknown[] | number;
  }> {
  slot: [Index, List];
  data: Locate<this[1], this[0]>;
}
