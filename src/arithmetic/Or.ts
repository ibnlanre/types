import { Fn } from "@ibnlanre/types";
import { Bit, Or } from "ts-arithmetic";

export interface TOr<
  Right extends Bit | void = void,
  Left extends Bit | void = void
> extends Fn<{
    0: Bit;
    1: Bit;
  }> {
  slot: [Right, Left];
  data: Or<this[1], this[0]>;
}
