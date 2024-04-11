import { Digit } from "@ibnlanre/types";
import { CompareMagnitudes, NormaliseIntegerParts, NumberPair } from "..";

export type CompareIntegerMagnitudes<
  NormalisedLeft extends Digit[],
  NormalisedRight extends Digit[]
> = NormaliseIntegerParts<NormalisedLeft, NormalisedRight> extends NumberPair<
  infer NormalisedLeftChunk,
  infer NormalisedRightChunk
>
  ? CompareMagnitudes<NormalisedLeftChunk, NormalisedRightChunk>
  : never;
