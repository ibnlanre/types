import { Apply, Fn, NonEmptyArray } from "@ibnlanre/types";

export type Invoke<
  Input extends unknown,
  Callbacks extends NonEmptyArray<Fn.Lambda<Input>>
> = Callbacks extends [
  infer Callback extends Fn,
  ...infer Rest extends NonEmptyArray<Fn.Lambda<Input>>
]
  ? Input extends Fn.Arguments<Callback>
    ? [Apply<Callback, [Input]>, ...Invoke<Input, Rest>]
    : [never, ...Invoke<Input, Rest>]
  : [];

export interface TInvoke<
  Callbacks extends Fn[] | void = void,
  Input extends unknown | void = void
> extends Fn<{
    0: Fn[];
    1: unknown;
  }> {
  slot: [Callbacks, Input];
  data: Invoke<this[1], this[0]>;
}
