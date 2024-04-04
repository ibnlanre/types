import { Fn, Inspect, NonEmptyArray, Select } from "@ibnlanre/types";

export type Apply<
  Callback extends Fn,
  List extends NonEmptyArray<Inspect<Callback>>
> = (Callback & {
  // if Callback is not a function, or some of the arguments
  // are not of the expected type, return never
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
