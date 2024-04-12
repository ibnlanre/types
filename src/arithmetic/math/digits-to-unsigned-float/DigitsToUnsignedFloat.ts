import { Digit, Size, Unshift } from "@ibnlanre/types";

import { HeadDigitArray } from "../head-digit-array";
import { MakeUnsignedFloat } from "../make-unsigned-float";

export type DigitsToUnsignedFloat<
  Normalised extends Digit[],
  DecimalPlaces extends number,
  FractionalDigits extends Digit[] = []
> = Size<FractionalDigits> extends DecimalPlaces
  ? MakeUnsignedFloat<Normalised, FractionalDigits>
  : Normalised extends HeadDigitArray<infer NormalisedChunk, infer LastDigit>
  ? DigitsToUnsignedFloat<
      NormalisedChunk,
      DecimalPlaces,
      Unshift<FractionalDigits, LastDigit>
    >
  : never;
