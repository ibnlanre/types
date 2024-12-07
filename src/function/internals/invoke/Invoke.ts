import type { Apply, Fn } from "@ibnlanre/types";

export type Invoke<
  Input extends unknown,
  Callbacks extends Array<Fn.Lambda<Input>>,
  Result extends unknown[] = []
> = Callbacks extends [
  infer Callback extends Fn,
  ...infer Rest extends Array<Fn.Lambda<Input>>
]
  ? Input extends Fn.Arguments<Callback>
    ? Invoke<Input, Rest, [...Result, Apply<Callback, [Input]>]>
    : Invoke<Input, Rest, Result>
  : Result;

export interface TInvoke<
  Callbacks extends Array<Fn.Lambda<Input>> | void = void,
  Input extends unknown | void = void
> extends Fn<{
    0: Array<Fn.Lambda<Input>>;
    1: unknown;
  }> {
  slot: [Callbacks, Input];
  data: Invoke<this[1], this[0]>;
}
