import { Pop, Shift, Size } from "@ibnlanre/types";

import {
  AddUnsignedIntegers,
  CompareNumbers,
  FloatDigitCount,
  FloatMaxDigits,
  FloatMaxDigitsAsUnsignedFloat,
  MakeSignedFloat,
  RoundFractionalDigits,
  RoundingCarryMap,
  SignedFloat,
  SmallEnoughForScientificNotation,
  SubtractUnsignedFloats,
  TailDigitArray,
  ToUnsignedFloat,
  UnsignedFloat,
  UnsignedFloatToNumber,
} from "..";

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
