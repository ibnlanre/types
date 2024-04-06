import { Fn } from "@ibnlanre/types";
import { Add, Mod, Subtract } from "ts-arithmetic";

type CeilHelper<
  Value extends number,
  DecimalPart extends number = Mod<Value, 1>,
  IntegerPart extends number = Subtract<Value, DecimalPart>
> = DecimalPart extends 0
  ? Value
  : `${Value}` extends `-${number}`
  ? IntegerPart
  : Add<IntegerPart, 1>;

export type Ceil<Value extends number> = CeilHelper<Value>;

export interface TCeil<Value extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Value];
  data: Ceil<this[0]>;
}
