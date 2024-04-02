import { Apply, Fn, Inspect } from "@ibnlanre/types";

export type Pipe<Item extends unknown, List extends Fn[]> = List extends [
  infer Callback extends Fn,
  ...infer Rest extends Fn[]
]
  ? Item extends Inspect<Callback>
    ? Pipe<Apply<Callback, [Item]>, Rest>
    : never
  : Item;

export interface TPipe<
  List extends Fn[] | void = void,
  Item extends unknown | void = void
> extends Fn<{
    0: Fn[];
    1: unknown;
  }> {
  slot: [List, Item];
  data: Pipe<this[1], this[0]>;
}
