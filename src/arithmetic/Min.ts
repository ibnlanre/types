import { Fn } from "@ibnlanre/types";
import { Min } from "ts-arithmetic";

export interface TMin<
  Right extends number | void = void,
  Left extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Right, Left];
  data: Min<this[1], this[0]>;
}
