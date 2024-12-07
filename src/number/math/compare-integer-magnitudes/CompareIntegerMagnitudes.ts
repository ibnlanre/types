import type { Digit } from "@ibnlanre/types";

import type { CompareMagnitudes } from "../compare-magnitudes";
import type { NormaliseIntegerParts } from "../normalise-integer-parts";
import type { NumberPair } from "../number-pair";

export type CompareIntegerMagnitudes<
  NormalisedLeft extends Digit[],
  NormalisedRight extends Digit[]
> = NormaliseIntegerParts<NormalisedLeft, NormalisedRight> extends NumberPair<
  infer NormalisedLeftChunk,
  infer NormalisedRightChunk
>
  ? CompareMagnitudes<NormalisedLeftChunk, NormalisedRightChunk>
  : never;
