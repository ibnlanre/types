import { Fn } from "@ibnlanre/types";
import { And, Bit } from "ts-arithmetic";

export interface TAnd<
  Left extends Bit | void = void,
  Right extends Bit | void = void
> extends Fn<{
    0: Bit;
    1: Bit;
  }> {
  slot: [Left, Right];
  data: And<this[0], this[1]>;
}
