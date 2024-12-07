import type { AddSignedFloats } from "../add-signed-floats";
import type { SignedFloatToNumber } from "../signed-float-to-number";
import type { ToSignedFloat } from "../to-signed-float";

export type AddNumbers<
  Left extends number,
  Right extends number
> = SignedFloatToNumber<
  AddSignedFloats<ToSignedFloat<Left>, ToSignedFloat<Right>>
>;
