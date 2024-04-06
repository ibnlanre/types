import { Fn } from "@ibnlanre/types";
import { IsPositive } from "ts-arithmetic";

export interface TIsPositive<Value extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Value];
  data: IsPositive<this[0]>;
}
