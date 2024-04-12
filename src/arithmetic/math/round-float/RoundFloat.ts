import { Pop, Shift, Size } from "@ibnlanre/types";

import { AddUnsignedIntegers } from "../add-unsigned-integers";
import { CompareNumbers } from "../compare-numbers";
import { FloatDigitCount } from "../float-digit-count";
import { FloatMaxDigits } from "../float-max-digits";
import { FloatMaxDigitsAsUnsignedFloat } from "../float-max-digits-as-unsigned-float";
import { MakeSignedFloat } from "../make-signed-float";
import { RoundFractionalDigits } from "../round-fractional-digits";
import { RoundingCarryMap } from "../rounding-carry-map";
import { SignedFloat } from "../signed-float";
import { SmallEnoughForScientificNotation } from "../small-enough-for-scientific-notation";
import { SubtractUnsignedFloats } from "../subtract-unsigned-floats";
import { TailDigitArray } from "../tail-digit-array";
import { ToUnsignedFloat } from "../to-unsigned-float";
import { UnsignedFloat } from "../unsigned-float";
import { UnsignedFloatToNumber } from "../unsigned-float-to-number";

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
          > extends TailDigitArray<infer Carry, infer RoundedFraction>
        ? MakeSignedFloat<
            TSign,
            UnsignedFloat<
              AddUnsignedIntegers<Shift<UnsignedDigits>, [Carry]>,
              RoundedFraction
            >
          >
        : never
      : never
    : never;
