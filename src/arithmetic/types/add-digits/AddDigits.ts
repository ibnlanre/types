import { Bit, Digit } from "@ibnlanre/types";
import { AddCarryDigit, AddDigit, HeadDigitPair, MakeChunks } from "..";

type AddDigitsHelper<
  NormalisedLeft extends Digit[],
  NormalisedRight extends Digit[],
  Carry extends Bit = 0,
  Result extends Digit[] = []
> = MakeChunks<NormalisedLeft> extends HeadDigitPair<
  infer NormalisedLeftChunk,
  infer LastLeftDigit
>
  ? MakeChunks<NormalisedRight> extends HeadDigitPair<
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
  : MakeChunks<NormalisedRight> extends HeadDigitPair<
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
