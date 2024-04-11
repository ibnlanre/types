import { Digit } from "@ibnlanre/types";
import { AddDigits, NormaliseIntegerParts, NumberPair } from "..";

export type AddUnsignedIntegers<
  NormalisedLeft extends Digit[],
  NormalisedRight extends Digit[]
> = NormaliseIntegerParts<NormalisedLeft, NormalisedRight> extends NumberPair<
  infer NormalisedLeftChunk,
  infer NormalisedRightChunk
>
  ? AddDigits<NormalisedLeftChunk, NormalisedRightChunk>
  : never;
