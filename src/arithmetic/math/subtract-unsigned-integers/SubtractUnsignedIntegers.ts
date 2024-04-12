import { Digit } from "@ibnlanre/types";

import { NormaliseIntegerParts } from "../normalise-integer-parts";
import { NumberPair } from "../number-pair";
import { SubtractDigits } from "../subtract-digits";

export type SubtractUnsignedIntegers<
  NormalisedLeft extends Digit[],
  NormalisedRight extends Digit[]
> = NormaliseIntegerParts<NormalisedLeft, NormalisedRight> extends NumberPair<
  infer NormalisedLeftChunk,
  infer NormalisedRightChunk
>
  ? SubtractDigits<NormalisedLeftChunk, NormalisedRightChunk>
  : never;
