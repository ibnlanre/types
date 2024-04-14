import { Fn, SliceFrom, SliceTo } from "@ibnlanre/types";

export type Insert<
  List extends unknown[],
  Index extends number,
  Value extends unknown
> = [...SliceTo<List, Index>, Value, ...SliceFrom<List, Index>];

export interface TInsert<
  Index extends number | void = 0,
  Value extends unknown | void = void,
  List extends unknown[] | void = void
> extends Fn<{
    0: number;
    1: unknown;
    2: unknown[];
  }> {
  slot: [Index, Value, List];
  data: Insert<this[2], this[0], this[1]>;
}
