import {
  Add,
  Concat,
  Fn,
  Indices,
  Push,
  Retrieve,
  Slice,
  SliceFrom,
  SliceTo,
} from "@ibnlanre/types";

export type RotateLeft<List extends unknown[], Pivot extends number = 0> = Push<
  Concat<SliceTo<List, Pivot>, SliceFrom<List, Add<Pivot, 1>>>,
  Retrieve<List, Pivot>
>;

export interface TRotateLeft<
  Pivot extends number | void = 0,
  List extends unknown[] | void = void
> extends Fn<{
    0: unknown;
    1: unknown[];
  }> {
  slot: [Pivot, List];
  data: RotateLeft<this[1], this[0]>;
}

type Test = RotateLeft<[1, 2, 3], 1>; // [[2, 3, 1], 1]
