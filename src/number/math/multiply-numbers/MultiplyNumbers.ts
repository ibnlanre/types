import type { MultiplySignedFloats } from "../multiply-signed-floats";
import type { SignedFloatToNumber } from "../signed-float-to-number";
import type { ToSignedFloat } from "../to-signed-float";

export type MultiplyNumbers<
  Left extends number,
  Right extends number
> = SignedFloatToNumber<
  MultiplySignedFloats<ToSignedFloat<Left>, ToSignedFloat<Right>>
>;
