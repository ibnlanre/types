import { Apply, Fn, Inspect } from "@ibnlanre/types";

export type Map<
  Callback extends Fn,
  List extends Inspect<Callback>[]
> = List extends [
  infer Element extends Inspect<Callback>,
  ...infer Rest extends Inspect<Callback>[]
]
  ? [Apply<Callback, [Element]>, ...Map<Callback, Rest>]
  : [];

export interface TMap<
  Callback extends Fn,
  List extends Inspect<Callback>[] | void = void
> extends Fn<{
    0: Fn;
    1: Inspect<Callback>[];
  }> {
  slot: [Callback, List];
  data: Map<this[0], this[1]>;
}
