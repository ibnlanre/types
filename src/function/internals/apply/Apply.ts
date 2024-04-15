import { Fn, NonEmptyArray } from "@ibnlanre/types";

export type Apply<
  Callback extends Fn,
  List extends NonEmptyArray<Fn.Arguments<Callback>>
> = (Callback & {
  args: Fn.Select<Callback["slot"], List>;
})["data"];

export interface TApply<
  Callback extends Fn,
  List extends NonEmptyArray<Fn.Arguments<Callback>> | void = void
> extends Fn<{
    0: Fn;
    1: NonEmptyArray<Fn.Arguments<Callback>>;
  }> {
  slot: [Callback, List];
  data: Apply<this[0], this[1]>;
}
