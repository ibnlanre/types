import { Fn, Math } from "@ibnlanre/types";

export type Divide<
  Dividend extends number,
  Divisor extends number
> = Math.Divide<Dividend, Divisor>;

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
