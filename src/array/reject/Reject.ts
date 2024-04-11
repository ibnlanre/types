import { Fn } from "@ibnlanre/types";

export type Reject<List extends unknown[], Element> = List extends [
  infer Head,
  ...infer Rest
]
  ? [Head] extends [Element]
    ? Reject<Rest, Element>
    : [Head, ...Reject<Rest, Element>]
  : [];

export interface TReject<
  Element extends unknown | void = void,
  List extends unknown[] | void = void
> extends Fn<{
    0: unknown;
    1: unknown[];
  }> {
  slot: [Element, List];
  data: Reject<this[1], this[0]>;
}
