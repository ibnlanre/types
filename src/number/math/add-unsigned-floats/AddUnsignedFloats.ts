import type { AddDigits } from "../add-digits";
import type { DigitsToUnsignedFloat } from "../digits-to-unsigned-float";
import type { Normalise } from "../normalise";
import type { NumberPair } from "../number-pair";
import type { UnsignedFloat } from "../unsigned-float";

export type AddUnsignedFloats<
  Left extends UnsignedFloat,
  Right extends UnsignedFloat
> = Normalise<Left, Right> extends [
  ...NumberPair<infer NormalisedLeft, infer NormalisedRight>,
  infer DecimalPlaces extends number
]
  ? DigitsToUnsignedFloat<
      AddDigits<NormalisedLeft, NormalisedRight>,
      DecimalPlaces
    >
  : never;
