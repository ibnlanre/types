import type { CrossMultiply } from "../cross-multiply";
import type { NormaliseForCrossMultiply } from "../normalise-for-cross-multiply";
import type { NumberPair } from "../number-pair";
import type { SafeDigitsToUnsignedFloat } from "../safe-digits-to-unsigned-float";
import type { UnsignedFloat } from "../unsigned-float";

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
