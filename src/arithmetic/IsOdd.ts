import { Fn } from "@ibnlanre/types";
import { IsOdd } from "ts-arithmetic";

export interface TIsOdd<Value extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Value];
  data: IsOdd<this[0]>;
}
