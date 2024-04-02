import { Fn, Inspect, NonEmptyArray, Select } from "@ibnlanre/types";

export type Apply<
  Callback extends Fn,
  List extends NonEmptyArray<Inspect<Callback>>
> = (Callback & {
  args: List extends Inspect<Callback>[]
    ? Select<Callback["slot"], List>
    : never;
})["data"];

export interface TApply<
  Callback extends Fn,
  List extends NonEmptyArray<Inspect<Callback>> | void = void
> extends Fn<{
    0: Fn;
    1: NonEmptyArray<Inspect<Callback>>;
  }> {
  slot: [Callback, List];
  data: Apply<this[0], this[1]>;
}
