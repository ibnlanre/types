import type { DivideSignedFloats } from "../divide-signed-floats";
import type { SignedFloatToNumber } from "../signed-float-to-number";
import type { ToSignedFloat } from "../to-signed-float";

export type DivideNumbers<
  Numerator extends number,
  Divisor extends number
> = SignedFloatToNumber<
  DivideSignedFloats<ToSignedFloat<Numerator>, ToSignedFloat<Divisor>>
>;
