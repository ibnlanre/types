import { Fn, Apply } from "@ibnlanre/types";
import { Add } from "ts-arithmetic";

import { SliceFrom } from "../slice-from";
import { SliceTo } from "../slice-to";

export type With<
  List extends any[],
  Index extends number,
  Element extends unknown | Fn
> = [
  ...SliceTo<List, Index>,
  Element extends Fn ? Apply<Element, [List[Index]]> : Element,
  ...SliceFrom<List, Add<Index, 1>>
];

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
