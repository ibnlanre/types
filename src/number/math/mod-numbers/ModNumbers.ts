import { ModSignedFloats } from "../mod-signed-floats";
import { SignedFloatToNumber } from "../signed-float-to-number";
import { ToSignedFloat } from "../to-signed-float";

export type ModNumbers<
  Numerator extends number,
  Divisor extends number
> = SignedFloatToNumber<
  ModSignedFloats<ToSignedFloat<Numerator>, ToSignedFloat<Divisor>>
>;
