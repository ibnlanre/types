import { Bit, Digit } from "@ibnlanre/types";
import {
  HeadDigitPair,
  MakeChunks,
  SubtractCarryDigit,
  SubtractDigit,
} from "..";

export type SubtractDigits<
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
    ? SubtractDigits<
        NormalisedLeftChunk,
        NormalisedRightChunk,
        SubtractCarryDigit<LastLeftDigit, LastRightDigit, Carry>,
        [SubtractDigit<LastLeftDigit, LastRightDigit, Carry>, ...Result]
      >
    : SubtractDigits<
        NormalisedLeftChunk,
        [],
        SubtractCarryDigit<LastLeftDigit, 0, Carry>,
        [SubtractDigit<LastLeftDigit, 0, Carry>, ...Result]
      >
  : MakeChunks<NormalisedRight> extends HeadDigitPair<
      infer NormalisedRightChunk,
      infer LastRightDigit
    >
  ? SubtractDigits<
      [],
      NormalisedRightChunk,
      SubtractCarryDigit<0, LastRightDigit, Carry>,
      [SubtractDigit<0, LastRightDigit, Carry>, ...Result]
    >
  : Carry extends 1
  ? [...Result, 9]
  : Result;
