import { Fn } from "@ibnlanre/types";
import { IsNegative } from "ts-arithmetic";

export interface TIsNegative<Value extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Value];
  data: IsNegative<this[0]>;
}
