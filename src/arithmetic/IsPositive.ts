import { Fn } from "@ibnlanre/types";
import { IsPositive } from "ts-arithmetic";

export interface TIsPositive<Number extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Number];
  data: IsPositive<this[0]>;
}
