import { Apply, Fn, IsNever } from "@ibnlanre/types";
import { ComposeLeft } from "../../members/compose-left";

type PipeHelper<
  Item extends unknown,
  Callbacks extends Fn[]
> = Callbacks extends [infer Callback extends Fn, ...infer Rest extends Fn[]]
  ? Item extends Fn.Arguments<Callback>
    ? PipeHelper<Apply<Callback, [Item]>, Rest>
    : never
  : Item;

export type Pipe<Item extends unknown, Callbacks extends Fn[]> = ComposeLeft<
  Item,
  Callbacks
> extends infer Composed
  ? IsNever<Composed> extends 1
    ? PipeHelper<Item, Callbacks>
    : Composed
  : never;

export interface TPipe<
  Callbacks extends Fn[] | void = void,
  Item extends unknown | void = void
> extends Fn<{
    0: Fn[];
    1: unknown;
  }> {
  slot: [Callbacks, Item];
  data: Pipe<this[1], this[0]>;
}
