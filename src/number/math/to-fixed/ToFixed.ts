import type { Divide } from "../divide";
import type { Multiply } from "../multiply";
import type { Round } from "../round";
import type { Subtract } from "../subtract";

type MultiplyByTenPower<
  Value extends number,
  Power extends number
> = Power extends 0
  ? Value
  : MultiplyByTenPower<Multiply<Value, 10>, Subtract<Power, 1>>;

type DivideByTenPower<
  Value extends number,
  Power extends number
> = Power extends 0
  ? Value
  : DivideByTenPower<Divide<Value, 10>, Subtract<Power, 1>>;

export type ToFixed<
  Value extends number,
  Digits extends number
> = MultiplyByTenPower<Value, Digits> extends infer Multiplied
  ? Multiplied extends number
    ? DivideByTenPower<Round<Multiplied>, Digits>
    : never
  : never;
