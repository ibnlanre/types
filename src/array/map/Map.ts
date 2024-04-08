import { Apply, Fn } from "@ibnlanre/types";

export type Map<
  Callback extends Fn,
  List extends Fn.Arguments<Callback>[]
> = List extends [
  infer Element extends Fn.Arguments<Callback>,
  ...infer Rest extends Fn.Arguments<Callback>[]
]
  ? [Apply<Callback, [Element]>, ...Map<Callback, Rest>]
  : [];

export interface TMap<
  Callback extends Fn,
  List extends Fn.Arguments<Callback>[] | void = void
> extends Fn<{
    0: Fn;
    1: Fn.Arguments<Callback>[];
  }> {
  slot: [Callback, List];
  data: Map<this[0], this[1]>;
}
