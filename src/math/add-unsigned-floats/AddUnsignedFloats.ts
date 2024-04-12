import { AddDigits } from "../add-digits";
import { DigitsToUnsignedFloat } from "../digits-to-unsigned-float";
import { Normalise } from "../normalise";
import { NumberPair } from "../number-pair";
import { UnsignedFloat } from "../unsigned-float";

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
