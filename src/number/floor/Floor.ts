import { Fn } from "@ibnlanre/types";
import { Mod, Subtract } from "ts-arithmetic";

type FloorHelper<
  Number extends number,
  DecimalPart extends number = Mod<Number, 1>,
  IntegerPart extends number = Subtract<Number, DecimalPart>
> = DecimalPart extends 0
  ? Number
  : `${Number}` extends `-${number}`
  ? Subtract<IntegerPart, 1>
  : IntegerPart;

export type Floor<Number extends number> = FloorHelper<Number>;

export interface TFloor<Number extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Number];
  data: Floor<this[0]>;
}
