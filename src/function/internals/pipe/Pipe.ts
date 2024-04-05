import { Apply, Fn, Inspect, IsNever } from "@ibnlanre/types";
import { ComposeLeft } from "../compose-left";

type PipeHelper<Item extends unknown, List extends Fn[]> = List extends [
  infer Callback extends Fn,
  ...infer Rest extends Fn[]
]
  ? Item extends Inspect<Callback>
    ? PipeHelper<Apply<Callback, [Item]>, Rest>
    : never
  : Item;

export type Pipe<Item extends unknown, List extends Fn[]> = ComposeLeft<
  Item,
  List
> extends infer Composed
  ? IsNever<Composed> extends 1
    ? PipeHelper<Item, List>
    : Composed
  : never;

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
