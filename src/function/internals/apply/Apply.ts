import { Fn, Inspect, NonEmptyArray, Select } from "@ibnlanre/types";

export type Apply<
  Callback extends Fn,
  List extends NonEmptyArray<Inspect<Callback>>
> = (Callback & {
  args: Select<Callback["slot"], List>;
})["data"];

export interface TApply<
  Callback extends Fn,
  List extends Inspect<Callback> | void = void
> extends Fn<{
    0: Fn;
    1: Inspect<Callback>;
  }> {
  slot: [Callback, List];
  data: Apply<this[0], this[1]>;
}
