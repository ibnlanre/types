import type { Apply, Fn } from "@ibnlanre/types";

export type Filter<
  Callback extends Fn,
  List extends Fn.Arguments<Callback>[]
> = List extends [
  infer Element extends Fn.Arguments<Callback>,
  ...infer Rest extends Fn.Arguments<Callback>[]
]
  ? Apply<Callback, [Element]> extends 1
    ? [Element, ...Filter<Callback, Rest>]
    : Filter<Callback, Rest>
  : [];

export interface TFilter<
  Callback extends Fn,
  List extends Fn.Arguments<Callback> | void = void
> extends Fn<{
    0: Fn;
    1: Fn.Arguments<Callback>;
  }> {
  slot: [Callback, List];
  data: Filter<this[0], this[1]>;
}
