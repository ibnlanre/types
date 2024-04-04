import { Apply, Fn, Inspect } from "@ibnlanre/types";

export type Besides<
  Value extends Inspect<Callback>,
  Callback extends Fn,
  Then extends unknown | Fn = Value,
  Else extends unknown | Fn = Value
> = Apply<Callback, [Value]> extends 0 | false
  ? Then extends Fn
    ? Apply<Then, [Value]>
    : Value
  : Else extends Fn
  ? Apply<Else, [Value]>
  : Value;

export interface TBesides<
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
  data: Besides<this[3], this[0], this[1], this[2]>;
}
