import { Fn } from "@ibnlanre/types";
import { GtOrEq } from "ts-arithmetic";

export interface TGtOrEq<
  Right extends number | void = void,
  Left extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Right, Left];
  data: GtOrEq<this[1], this[0]>;
}
