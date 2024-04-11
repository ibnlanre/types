import { Fn } from "@ibnlanre/types";

export type SomeExtendType<
  List extends unknown[],
  Element extends unknown
> = List extends [infer Head, ...infer Rest]
  ? [Head] extends [Element]
    ? 1
    : SomeExtendType<Rest, Element>
  : 0;

export interface TSomeExtendType<
  Element extends unknown,
  List extends unknown[]
> extends Fn<{
    0: unknown;
    1: unknown[];
  }> {
  slot: [Element, List];
  data: SomeExtendType<this[1], this[0]>;
}
