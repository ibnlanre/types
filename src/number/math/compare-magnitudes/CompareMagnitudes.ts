import type { Digit } from "@ibnlanre/types";

import type { CompareDigits } from "../compare-digits";
import type { TailDigitArray } from "../tail-digit-array";

export type CompareMagnitudes<
  NormalisedLeft extends Digit[],
  NormalisedRight extends Digit[]
> = NormalisedLeft extends NormalisedRight
  ? 0
  : [NormalisedLeft, NormalisedRight] extends [
      TailDigitArray<infer FirstLeftDigit, infer NormalisedLeftChunk>,
      TailDigitArray<infer FirstRightDigit, infer NormalisedRightChunk>
    ]
  ? CompareDigits<FirstLeftDigit, FirstRightDigit> extends 0
    ? CompareMagnitudes<NormalisedLeftChunk, NormalisedRightChunk>
    : CompareDigits<FirstLeftDigit, FirstRightDigit>
  : never;
