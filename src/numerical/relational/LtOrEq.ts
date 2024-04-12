import { Fn } from "@ibnlanre/types";
import { LtOrEq } from "ts-arithmetic";

export interface TLtOrEq<
  Right extends number | void = void,
  Left extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Right, Left];
  data: LtOrEq<this[1], this[0]>;
}
