import { Apply, Fn } from "@ibnlanre/types";

export type If<
  Value extends Fn.Arguments<Callback>,
  Callback extends Fn,
  Then extends unknown | Fn = Value,
  Else extends unknown | Fn = Value
> = Apply<Callback, [Value]> extends 1 | true
  ? Then extends Fn
    ? Apply<Then, [Value]>
    : Then
  : Else extends Fn
  ? Apply<Else, [Value]>
  : Else;

export interface TIf<
  Callback extends Fn | void = void,
  Then extends unknown | Fn | void = unknown,
  Else extends unknown | Fn | void = unknown,
  Value extends unknown | void = void
> extends Fn<{
    0: Fn;
    1: unknown | Fn;
    2: unknown | Fn;
    3: unknown;
  }> {
  slot: [Callback, Then, Else, Value];
  data: If<this[3], this[0], this[1], this[2]>;
}
