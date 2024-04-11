import {
  AddDigits,
  Normalise,
  DigitsToUnsignedFloat,
  NumberPair,
  UnsignedFloat,
} from "..";

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
