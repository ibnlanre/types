import { Fn } from "@ibnlanre/types";
import { Add, Mod, Subtract } from "ts-arithmetic";

type CeilHelper<
  Number extends number,
  DecimalPart extends number = Mod<Number, 1>,
  IntegerPart extends number = Subtract<Number, DecimalPart>
> = DecimalPart extends 0
  ? Number
  : `${Number}` extends `-${number}`
  ? IntegerPart
  : Add<IntegerPart, 1>;

export type Ceil<Number extends number> = CeilHelper<Number>;

export interface TCeil<Number extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Number];
  data: Ceil<this[0]>;
}
