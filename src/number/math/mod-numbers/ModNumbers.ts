import type { ModSignedFloats } from "../mod-signed-floats";
import type { SignedFloatToNumber } from "../signed-float-to-number";
import type { ToSignedFloat } from "../to-signed-float";

export type ModNumbers<
  Numerator extends number,
  Divisor extends number
> = SignedFloatToNumber<
  ModSignedFloats<ToSignedFloat<Numerator>, ToSignedFloat<Divisor>>
>;
