import type { Fn, Math } from "@ibnlanre/types";

export type Clamp<
  Value extends number,
  LowerBound extends number,
  UpperBound extends number
> = Math.Clamp<Value, LowerBound, UpperBound>;

export interface TClamp<
  LowerBound extends number | void = void,
  UpperBound extends number | void = void,
  Value extends number | void = void
> extends Fn<{
    0: number;
    1: number;
    2: number;
  }> {
  slot: [LowerBound, UpperBound, Value];
  data: Clamp<this[2], this[0], this[1]>;
}
