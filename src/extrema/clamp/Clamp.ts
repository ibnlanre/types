import { Fn, Math } from "@ibnlanre/types";

export type Clamp<
  Value extends number,
  Minimum extends number,
  Maximum extends number
> = Math.Clamp<Value, Minimum, Maximum>;

export interface TClamp<
  Minimum extends number | void = void,
  Maximum extends number | void = void,
  Value extends number | void = void
> extends Fn<{
    0: number;
    1: number;
    2: number;
  }> {
  slot: [Minimum, Maximum, Value];
  data: Clamp<this[2], this[0], this[1]>;
}
