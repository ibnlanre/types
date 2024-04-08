import { Apply, Fn } from "@ibnlanre/types";

export type Some<
  Callback extends Fn,
  List extends Fn.Arguments<Callback>[]
> = List extends []
  ? 0
  : List extends [
      infer Element extends Fn.Arguments<Callback>,
      ...infer Rest extends Fn.Arguments<Callback>[]
    ]
  ? Apply<Callback, [Element]> extends 1
    ? 1
    : Some<Callback, Rest>
  : 0;

export interface TSome<
  Callback extends Fn,
  List extends Fn.Arguments<Callback> | void = void
> extends Fn<{
    0: Fn;
    1: Fn.Arguments<Callback>;
  }> {
  slot: [Callback, List];
  data: Some<this[0], this[1]>;
}
