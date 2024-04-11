import { Fn } from "@ibnlanre/types";

export type TrimTail<List extends unknown[], Element> = List extends [
  ...infer Rest,
  infer Tail
]
  ? [Tail] extends [Element]
    ? TrimTail<Rest, Element>
    : List
  : List;

export interface TTrimTail<
  Element extends unknown | void = void,
  List extends unknown[] | void = void
> extends Fn<{
    0: unknown;
    1: unknown[];
  }> {
  slot: [Element, List];
  data: TrimTail<this[1], this[0]>;
}
