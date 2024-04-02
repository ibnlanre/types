import { Fn } from "@ibnlanre/types";
import { Mod, Subtract } from "ts-arithmetic";

export type Trunc<Number extends number> = Subtract<Number, Mod<Number, 1>>;

export interface TTrunc<Number extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Number];
  data: Trunc<this[0]>;
}
