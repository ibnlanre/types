import { Fn } from "@ibnlanre/types";

export type AnyExtend<
  List extends unknown[],
  Element extends unknown
> = List extends [infer Head, ...infer Rest]
  ? [Head] extends [Element]
    ? 1
    : AnyExtend<Rest, Element>
  : 0;

export interface TAnyExtend<Element extends unknown, List extends unknown[]>
  extends Fn<{
    0: unknown;
    1: unknown[];
  }> {
  slot: [Element, List];
  data: AnyExtend<this[1], this[0]>;
}
