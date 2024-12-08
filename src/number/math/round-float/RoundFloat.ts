import type { Pop, Shift, Size } from "@ibnlanre/types";

import type { CompareNumbers } from "../compare-numbers";
import type { FloatDigitCount } from "../float-digit-count";
import type { FloatMaxDigits } from "../float-max-digits";
import type { FloatMaxDigitsAsUnsignedFloat } from "../float-max-digits-as-unsigned-float";
import type { MakeSignedFloat } from "../make-signed-float";
import type { RoundFractionalDigits } from "../round-fractional-digits";
import type { RoundingCarryMap } from "../rounding-carry-map";
import type { SignedFloat } from "../signed-float";
import type { SmallEnoughForScientificNotation } from "../small-enough-for-scientific-notation";
import type { SubtractUnsignedFloats } from "../subtract-unsigned-floats";
import type { ToUnsignedFloat } from "../to-unsigned-float";
import type { UnsignedFloat } from "../unsigned-float";
import type { UnsignedFloatToNumber } from "../unsigned-float-to-number";
import type { UnsignedNumbers } from "../unsigned-numbers";

export type RoundFloat<SignedNormalisedDigits extends SignedFloat> =
  SmallEnoughForScientificNotation<SignedNormalisedDigits[1][1]> extends 1
    ? SignedNormalisedDigits
    : SignedNormalisedDigits extends SignedFloat<
        infer TSign,
        infer UnsignedDigits
      >
    ? CompareNumbers<FloatDigitCount<UnsignedDigits>, FloatMaxDigits> extends
        | -1
        | 0
      ? SignedNormalisedDigits
      : SubtractUnsignedFloats<
          FloatMaxDigitsAsUnsignedFloat,
          ToUnsignedFloat<Size<Shift<UnsignedDigits>>>
        > extends SignedFloat<
          infer TargetFractionLengthSign,
          infer TargetFractionLength
        >
      ? TargetFractionLengthSign extends "-"
        ? SignedNormalisedDigits
        : RoundFractionalDigits<
            Pop<UnsignedDigits>,
            RoundingCarryMap[TSign],
            UnsignedFloatToNumber<TargetFractionLength, "+">
          > extends UnsignedNumbers<infer RoundedFraction>
        ? MakeSignedFloat<
            TSign,
            UnsignedFloat<Shift<UnsignedDigits>, RoundedFraction>
          >
        : never
      : never
    : never;
