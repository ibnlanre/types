import type { CompareFloatMagnitudes } from "../compare-float-magnitudes";
import type { DigitsToUnsignedFloat } from "../digits-to-unsigned-float";
import type { Normalise } from "../normalise";
import type { NumberPair } from "../number-pair";
import type { SignedFloat } from "../signed-float";
import type { SignedFloatZero } from "../signed-float-zero";
import type { SubtractDigits } from "../subtract-digits";
import type { UnsignedFloat } from "../unsigned-float";

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
