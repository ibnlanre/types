import { SignedFloatToNumber, SubtractSignedFloats, ToSignedFloat } from "..";

export type SubtractNumbers<
  Left extends number,
  Right extends number
> = SignedFloatToNumber<
  SubtractSignedFloats<ToSignedFloat<Left>, ToSignedFloat<Right>>
>;
