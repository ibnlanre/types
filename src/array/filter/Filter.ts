import { Apply, Fn, Inspect } from "@ibnlanre/types";

export type Filter<
  Callback extends Fn,
  List extends Inspect<Callback>[]
> = List extends [
  infer Element extends Inspect<Callback>,
  ...infer Rest extends Inspect<Callback>[]
]
  ? Apply<Callback, [Element]> extends 1
    ? [Element, ...Filter<Callback, Rest>]
    : Filter<Callback, Rest>
  : [];

export interface TFilter<
  Callback extends Fn,
  List extends Inspect<Callback> | void = void
> extends Fn<{
    0: Fn;
    1: Inspect<Callback>;
  }> {
  slot: [Callback, List];
  data: Filter<this[0], this[1]>;
}
