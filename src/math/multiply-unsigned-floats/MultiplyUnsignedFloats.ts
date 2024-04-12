import { CrossMultiply } from "../cross-multiply";
import { NormaliseForCrossMultiply } from "../normalise-for-cross-multiply";
import { NumberPair } from "../number-pair";
import { SafeDigitsToUnsignedFloat } from "../safe-digits-to-unsigned-float";
import { UnsignedFloat } from "../unsigned-float";

export type MultiplyUnsignedFloats<
  Left extends UnsignedFloat,
  Right extends UnsignedFloat
> = NormaliseForCrossMultiply<Left, Right> extends [
  ...NumberPair<infer NormalisedLeft, infer NormalisedRight>,
  infer DecimalPlaces extends number
]
  ? SafeDigitsToUnsignedFloat<
      CrossMultiply<NormalisedLeft, NormalisedRight>,
      DecimalPlaces
    >
  : never;
