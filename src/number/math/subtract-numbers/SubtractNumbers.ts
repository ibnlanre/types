import type { SignedFloatToNumber } from "../signed-float-to-number";
import type { SubtractSignedFloats } from "../subtract-signed-floats";
import type { ToSignedFloat } from "../to-signed-float";

export type SubtractNumbers<
  Left extends number,
  Right extends number
> = SignedFloatToNumber<
  SubtractSignedFloats<ToSignedFloat<Left>, ToSignedFloat<Right>>
>;
