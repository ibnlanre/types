import {
  CompareFloatMagnitudes,
  DigitsToUnsignedFloat,
  Normalise,
  NumberPair,
  SignedFloat,
  SignedFloatZero,
  SubtractDigits,
  UnsignedFloat,
} from "..";

type SubtractUnsignedFloatsHelper<
  X extends UnsignedFloat,
  Y extends UnsignedFloat
> = Normalise<X, Y> extends [
  ...NumberPair<infer TNormalisedX, infer TNormalisedY>,
  infer TDecimalPlaces extends number
]
  ? DigitsToUnsignedFloat<
      SubtractDigits<TNormalisedX, TNormalisedY>,
      TDecimalPlaces
    >
  : never;

export type SubtractUnsignedFloats<
  X extends UnsignedFloat,
  Y extends UnsignedFloat
> = CompareFloatMagnitudes<X, Y> extends 1
  ? SignedFloat<"+", SubtractUnsignedFloatsHelper<X, Y>>
  : CompareFloatMagnitudes<X, Y> extends 0
  ? SignedFloatZero
  : SignedFloat<"-", SubtractUnsignedFloatsHelper<Y, X>>;
