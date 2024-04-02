import { Apply, Fn, Inspect } from "@ibnlanre/types";

export type Some<
  Callback extends Fn,
  List extends Inspect<Callback>[]
> = List extends []
  ? 0
  : List extends [
      infer Element extends Inspect<Callback>,
      ...infer Rest extends Inspect<Callback>[]
    ]
  ? Apply<Callback, [Element]> extends 1
    ? 1
    : Some<Callback, Rest>
  : 0;

export interface TSome<
  Callback extends Fn,
  List extends Inspect<Callback> | void = void
> extends Fn<{
    0: Fn;
    1: Inspect<Callback>;
  }> {
  slot: [Callback, List];
  data: Some<this[0], this[1]>;
}
