import { Fn, IsExact } from "@ibnlanre/types";

export type Includes<List extends any[], Element> = List extends []
  ? 0
  : List extends [infer Head, ...infer Rest]
  ? IsExact<Head, Element> extends 1
    ? 1
    : Includes<Rest, Element>
  : 0;

export interface TIncludes<
  Element extends unknown | void = void,
  List extends unknown[] | void = void
> extends Fn<{
    0: unknown;
    1: unknown[];
  }> {
  slot: [Element, List];
  data: Includes<this[1], this[0]>;
}
