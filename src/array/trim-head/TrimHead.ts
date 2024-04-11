import { Fn } from "@ibnlanre/types";

export type TrimHead<List extends unknown[], Element> = List extends [
  infer Head,
  ...infer Rest
]
  ? [Head] extends [Element]
    ? TrimHead<Rest, Element>
    : List
  : List;

export interface TTrimHead<
  Element extends unknown | void = void,
  List extends unknown[] | void = void
> extends Fn<{
    0: unknown;
    1: unknown[];
  }> {
  slot: [Element, List];
  data: TrimHead<this[1], this[0]>;
}
