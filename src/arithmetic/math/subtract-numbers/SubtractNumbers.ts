import { SignedFloatToNumber } from "../signed-float-to-number";
import { SubtractSignedFloats } from "../subtract-signed-floats";
import { ToSignedFloat } from "../to-signed-float";

export type SubtractNumbers<
  Left extends number,
  Right extends number
> = SignedFloatToNumber<
  SubtractSignedFloats<ToSignedFloat<Left>, ToSignedFloat<Right>>
>;
