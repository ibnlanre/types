import { Fn } from "@ibnlanre/types";
import { Mod } from "ts-arithmetic";

export interface TMod<
  Divisor extends number | void = void,
  Dividend extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Divisor, Dividend];
  data: Mod<this[1], this[0]>;
}
