import { MultiplySignedFloats } from "../multiply-signed-floats";
import { SignedFloatToNumber } from "../signed-float-to-number";
import { ToSignedFloat } from "../to-signed-float";

export type MultiplyNumbers<
  Left extends number,
  Right extends number
> = SignedFloatToNumber<
  MultiplySignedFloats<ToSignedFloat<Left>, ToSignedFloat<Right>>
>;
