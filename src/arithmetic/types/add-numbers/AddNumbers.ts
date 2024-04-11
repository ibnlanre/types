import { AddSignedFloats, SignedFloatToNumber, ToSignedFloat } from "..";

export type AddNumbers<
  Left extends number,
  Right extends number
> = SignedFloatToNumber<
  AddSignedFloats<ToSignedFloat<Left>, ToSignedFloat<Right>>
>;
