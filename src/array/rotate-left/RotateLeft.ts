import {
  Add,
  Concat,
  Fn,
  IsNever,
  Locate,
  Push,
  Retrieve,
  SliceFrom,
  SliceTo,
} from "@ibnlanre/types";

export type RotateLeftHelper<
  List extends unknown[],
  Pivot extends number = 0
> = IsNever<Pivot> extends 0
  ? Retrieve<List, Pivot> extends infer Element
    ? IsNever<Element> extends 1
      ? List
      : Push<
          Concat<SliceTo<List, Pivot>, SliceFrom<List, Add<Pivot, 1>>>,
          Retrieve<List, Pivot>
        >
    : never
  : List;

export type RotateLeft<
  List extends unknown[],
  Pivot extends number = 0
> = RotateLeftHelper<List, Locate<List, Pivot>>;

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
