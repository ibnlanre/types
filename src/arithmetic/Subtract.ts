import { Fn } from "@ibnlanre/types";
import { Subtract } from "ts-arithmetic";

export interface TSubtract<
  Right extends number | void = void,
  Left extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Right, Left];
  data: Subtract<this[1], this[0]>;
}
