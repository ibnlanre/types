import type { Add, Fn, SliceFrom, SliceTo } from "@ibnlanre/types";

export type Drop<List extends unknown[], Index extends number> = [
  ...SliceTo<List, Index>,
  ...SliceFrom<List, Add<Index, 1>>
];

export interface TDrop<
  Index extends number | void = void,
  List extends unknown[] | void = void
> extends Fn<{
    0: unknown;
    1: unknown[];
  }> {
  slot: [Index, List];
  data: Drop<this[1], this[0]>;
}
