import { Fn } from "@ibnlanre/types";
import { IsEven } from "ts-arithmetic";

export interface TIsEven<Value extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Value];
  data: IsEven<this[0]>;
}
