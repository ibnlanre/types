import { Digit, Size } from "@ibnlanre/types";
import { AddUnsignedIntegers, HeadDigitArray } from "..";

export type RoundFractionalDigits<
  Floats extends Digit[],
  RoundingMap extends Digit[],
  TargetFractionLength extends number
> = Floats extends HeadDigitArray<infer Rest, infer Head>
  ? Size<Rest> extends TargetFractionLength
    ? TargetFractionLength extends 0
      ? [RoundingMap[Head]]
      : AddUnsignedIntegers<Rest, [RoundingMap[Head]]>
    : RoundFractionalDigits<Rest, RoundingMap, TargetFractionLength>
  : never;
