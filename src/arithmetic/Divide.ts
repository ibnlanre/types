import { Fn } from "@ibnlanre/types";
import { Divide } from "ts-arithmetic";

export interface TDivide<
  Divisor extends number | void = void,
  Dividend extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Divisor, Dividend];
  data: Divide<this[1], this[0]>;
}
