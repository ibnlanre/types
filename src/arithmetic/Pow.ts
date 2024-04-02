import { Fn } from "@ibnlanre/types";
import { Pow } from "ts-arithmetic";

export interface TPow<
  Right extends number | void = void,
  Left extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Right, Left];
  data: Pow<this[1], this[0]>;
}
