import { Fn } from "@ibnlanre/types";
import { Multiply } from "ts-arithmetic";

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
