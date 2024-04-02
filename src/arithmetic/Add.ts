import { Fn } from "@ibnlanre/types";
import { Add } from "ts-arithmetic";

export interface TAdd<
  Left extends number | void = void,
  Right extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Left, Right];
  data: Add<this[0], this[1]>;
}
