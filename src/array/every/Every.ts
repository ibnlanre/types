import { Apply, Fn } from "@ibnlanre/types";

export type Every<
  Callback extends Fn,
  List extends Fn.Arguments<Callback>[]
> = List extends []
  ? 1
  : List extends [
      infer Element extends Fn.Arguments<Callback>,
      ...infer Rest extends Fn.Arguments<Callback>[]
    ]
  ? Apply<Callback, [Element]> extends 1
    ? Every<Callback, Rest>
    : 0
  : 0;

export interface TEvery<
  Callback extends Fn,
  List extends Fn.Arguments<Callback>[] | void = void
> extends Fn<{
    0: Fn;
    1: Fn.Arguments<Callback>[];
  }> {
  slot: [Callback, List];
  data: Every<this[0], this[1]>;
}
