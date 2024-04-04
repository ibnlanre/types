import { Fn } from "@ibnlanre/types";
import { Bit, Not } from "ts-arithmetic";

export interface TNot<Proposition extends Bit | void = void>
  extends Fn<{
    0: Bit;
  }> {
  slot: [Proposition];
  data: Not<this[0]>;
}
