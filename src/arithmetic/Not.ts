import { Fn } from "@ibnlanre/types";
import { Bit, Not } from "ts-arithmetic";

export interface TNot<Number extends Bit | void = void>
  extends Fn<{
    0: Bit;
  }> {
  slot: [Number];
  data: Not<this[0]>;
}
