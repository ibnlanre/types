import type { Add, Apply, Fn, IsNever, Locate } from "@ibnlanre/types";

import type { SliceFrom } from "../slice-from";
import type { SliceTo } from "../slice-to";

export type WithHelper<
  List extends any[],
  Index extends number,
  Element extends unknown | Fn
> = [
  ...SliceTo<List, Index>,
  Element extends Fn ? Apply<Element, [List[Index]]> : Element,
  ...SliceFrom<List, Add<Index, 1>>
];

export type With<
  List extends any[],
  Index extends number,
  Element extends unknown | Fn
> = Locate<List, Index> extends infer Position
  ? IsNever<Position> extends 1
    ? List
    : Position extends number
    ? WithHelper<List, Position, Element>
    : never
  : never;

export interface TWith<
  Index extends number | void = void,
  Element extends unknown | Fn | void = void,
  List extends unknown[] | void = void
> extends Fn<{
    0: number;
    1: unknown | Fn;
    2: unknown[];
  }> {
  slot: [Index, Element, List];
  data: With<this[2], this[0], this[1]>;
}
