import type { Fn, Math } from "@ibnlanre/types";

export type ToFixed<Value extends number, Digits extends number> = Math.ToFixed<
  Value,
  Digits
>;

export interface TToFixed<
  Digits extends number | void = void,
  Value extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Digits, Value];
  data: ToFixed<this[1], this[0]>;
}
