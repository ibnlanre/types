import type { Digit } from "@ibnlanre/types";

import type { AddDigits } from "../add-digits";
import type { NormaliseIntegerParts } from "../normalise-integer-parts";
import type { NumberPair } from "../number-pair";

export type AddUnsignedIntegers<
  NormalisedLeft extends Digit[],
  NormalisedRight extends Digit[]
> = NormaliseIntegerParts<NormalisedLeft, NormalisedRight> extends NumberPair<
  infer NormalisedLeftChunk,
  infer NormalisedRightChunk
>
  ? AddDigits<NormalisedLeftChunk, NormalisedRightChunk>
  : never;
