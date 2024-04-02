import { Fn } from "@ibnlanre/types";
import { Negate } from "ts-arithmetic";

export interface TNegate<Number extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Number];
  data: Negate<this[0]>;
}
