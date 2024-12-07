import type { Bit, Digit } from "@ibnlanre/types";

import type { AddCarryDigit } from "../add-carry-digit";
import type { AddDigit } from "../add-digit/AddDigit";
import type { HeadDigitArray } from "../head-digit-array";

type AddDigitsHelper<
  NormalisedLeft extends Digit[],
  NormalisedRight extends Digit[],
  Carry extends Bit = 0,
  Result extends Digit[] = []
> = NormalisedLeft extends HeadDigitArray<
  infer NormalisedLeftChunk,
  infer LastLeftDigit
>
  ? NormalisedRight extends HeadDigitArray<
      infer NormalisedRightChunk,
      infer LastRightDigit
    >
    ? AddDigitsHelper<
        NormalisedLeftChunk,
        NormalisedRightChunk,
        AddCarryDigit<LastLeftDigit, LastRightDigit, Carry>,
        [AddDigit<LastLeftDigit, LastRightDigit, Carry>, ...Result]
      >
    : AddDigitsHelper<
        NormalisedLeftChunk,
        [],
        AddCarryDigit<LastLeftDigit, 0, Carry>,
        [AddDigit<LastLeftDigit, 0, Carry>, ...Result]
      >
  : NormalisedRight extends HeadDigitArray<
      infer NormalisedRightChunk,
      infer LastRightDigit
    >
  ? AddDigitsHelper<
      [],
      NormalisedRightChunk,
      AddCarryDigit<0, LastRightDigit, Carry>,
      [AddDigit<0, LastRightDigit, Carry>, ...Result]
    >
  : Carry extends 1
  ? [1, ...Result]
  : Result;

export type AddDigits<
  NormalisedLeft extends Digit[],
  NormalisedRight extends Digit[]
> = AddDigitsHelper<NormalisedLeft, NormalisedRight>;
