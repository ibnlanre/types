import { Fn } from "@ibnlanre/types";
import { Add } from "ts-arithmetic";

import { SliceFrom } from "../slice-from";
import { SliceTo } from "../slice-to";

export type With<List extends any[], Index extends number, Element> = [
  ...SliceTo<List, Index>,
  Element,
  ...SliceFrom<List, Add<Index, 1>>
];

export interface TWith<
  Index extends number | void = void,
  Element extends unknown | void = void,
  List extends unknown[] | void = void
> extends Fn<{
    0: number;
    1: unknown;
    2: unknown[];
  }> {
  slot: [Index, Element, List];
  data: With<this[2], this[0], this[1]>;
}
