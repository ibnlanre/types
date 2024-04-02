import { Fn } from "@ibnlanre/types";
import { Gt } from "ts-arithmetic";

export interface TGt<
  Right extends number | void = void,
  Left extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Right, Left];
  data: Gt<this[1], this[0]>;
}
