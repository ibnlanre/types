import { AddSignedFloats } from "../add-signed-floats";
import { SignedFloatToNumber } from "../signed-float-to-number";
import { ToSignedFloat } from "../to-signed-float";

export type AddNumbers<
  Left extends number,
  Right extends number
> = SignedFloatToNumber<
  AddSignedFloats<ToSignedFloat<Left>, ToSignedFloat<Right>>
>;
