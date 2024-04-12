import { DivideSignedFloats } from "../divide-signed-floats";
import { SignedFloatToNumber } from "../signed-float-to-number";
import { ToSignedFloat } from "../to-signed-float";

export type DivideNumbers<
  Numerator extends number,
  Divisor extends number
> = SignedFloatToNumber<
  DivideSignedFloats<ToSignedFloat<Numerator>, ToSignedFloat<Divisor>>
>;
