import type { Fn, Math } from "@ibnlanre/types";

export type Multiply<
  Multiplicand extends number,
  Multiplier extends number
> = Math.Multiply<Multiplicand, Multiplier>;

export interface TMultiply<
  Multiplier extends number | void = void,
  Multiplicand extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Multiplier, Multiplicand];
  data: Multiply<this[1], this[0]>;
}
