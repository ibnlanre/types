import { Digit } from "@ibnlanre/types";

import { AddDigits } from "../add-digits";
import { NormaliseIntegerParts } from "../normalise-integer-parts";
import { NumberPair } from "../number-pair";

export type AddUnsignedIntegers<
  NormalisedLeft extends Digit[],
  NormalisedRight extends Digit[]
> = NormaliseIntegerParts<NormalisedLeft, NormalisedRight> extends NumberPair<
  infer NormalisedLeftChunk,
  infer NormalisedRightChunk
>
  ? AddDigits<NormalisedLeftChunk, NormalisedRightChunk>
  : never;
