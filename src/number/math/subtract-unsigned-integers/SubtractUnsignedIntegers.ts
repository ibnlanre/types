import type { Digit } from "@ibnlanre/types";

import type { NormaliseIntegerParts } from "../normalise-integer-parts";
import type { NumberPair } from "../number-pair";
import type { SubtractDigits } from "../subtract-digits";

export type SubtractUnsignedIntegers<
  NormalisedLeft extends Digit[],
  NormalisedRight extends Digit[]
> = NormaliseIntegerParts<NormalisedLeft, NormalisedRight> extends NumberPair<
  infer NormalisedLeftChunk,
  infer NormalisedRightChunk
>
  ? SubtractDigits<NormalisedLeftChunk, NormalisedRightChunk>
  : never;
