import { Fn } from "@ibnlanre/types";
import { Mod, Subtract } from "ts-arithmetic";

export type Trunc<Value extends number> = Subtract<Value, Mod<Value, 1>>;

export interface TTrunc<Value extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Value];
  data: Trunc<this[0]>;
}
