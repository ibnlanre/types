import { Fn, Math } from "@ibnlanre/types";

type CeilHelper<
  Value extends number,
  DecimalPart extends number = Math.Mod<Value, 1>,
  IntegerPart extends number = Math.Subtract<Value, DecimalPart>
> = DecimalPart extends 0
  ? Value
  : `${Value}` extends `-${number}`
  ? IntegerPart
  : Math.Add<IntegerPart, 1>;

export type Ceil<Value extends number> = CeilHelper<Value>;

export interface TCeil<Value extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Value];
  data: Ceil<this[0]>;
}
