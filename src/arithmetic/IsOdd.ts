import { Fn } from "@ibnlanre/types";
import { IsOdd } from "ts-arithmetic";

export interface TIsOdd<Number extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Number];
  data: IsOdd<this[0]>;
}
