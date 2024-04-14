import { Fn, Math } from "@ibnlanre/types";

type FloorHelper<
  Value extends number,
  DecimalPart extends number = Math.Mod<Value, 1>,
  IntegerPart extends number = Math.Subtract<Value, DecimalPart>
> = DecimalPart extends 0
  ? Value
  : `${Value}` extends `-${number}`
  ? Math.Subtract<IntegerPart, 1>
  : IntegerPart;

export type Floor<Value extends number> = FloorHelper<Value>;

export interface TFloor<Value extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Value];
  data: Floor<this[0]>;
}
