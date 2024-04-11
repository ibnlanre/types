import { Digit } from "@ibnlanre/types";
import { NormaliseIntegerParts, NumberPair, SubtractDigits } from "..";

export type SubtractUnsignedIntegers<
  NormalisedLeft extends Digit[],
  NormalisedRight extends Digit[]
> = NormaliseIntegerParts<NormalisedLeft, NormalisedRight> extends NumberPair<
  infer NormalisedLeftChunk,
  infer NormalisedRightChunk
>
  ? SubtractDigits<NormalisedLeftChunk, NormalisedRightChunk>
  : never;
