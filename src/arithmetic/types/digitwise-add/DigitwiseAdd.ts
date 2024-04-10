import { MakeBinaryTable } from "src/math/make-binary-table";
import { Digit } from "src/native";
import { Bit } from "ts-arithmetic";

type AddDigitTable = MakeBinaryTable<[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]>;
type AddDigitCarryTable = MakeBinaryTable<[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1>;

type AddDigit<
  Left extends Digit,
  Right extends Digit,
  Carry extends Bit = 0
> = AddDigitTable[Carry][Left][Right];

type AddCarryDigit<
  Left extends Digit,
  Right extends Digit,
  Carry extends Bit = 0
> = AddDigitCarryTable[Carry][Left][Right];

type SeparateChunks<NormalisedDigit extends Digit[]> = NormalisedDigit extends [
  ...infer Rest,
  infer Last
]
  ? [Rest, Last]
  : [];

type ChunkPairs<
  NormalisedRest extends Digit[],
  NormalisedLast extends Digit
> = [NormalisedRest, NormalisedLast];

export type AddDigits<
  NormalisedLeft extends Digit[],
  NormalisedRight extends Digit[],
  Carry extends Bit = 0,
  Result extends Digit[] = []
> = SeparateChunks<NormalisedLeft> extends ChunkPairs<
  infer NormalisedLeftChunk,
  infer LastLeftDigit
>
  ? SeparateChunks<NormalisedRight> extends ChunkPairs<
      infer NormalisedRightChunk,
      infer LastRightDigit
    >
    ? AddDigits<
        NormalisedLeftChunk,
        NormalisedRightChunk,
        AddCarryDigit<LastLeftDigit, LastRightDigit, Carry>,
        [AddDigit<LastLeftDigit, LastRightDigit, Carry>, ...Result]
      >
    : AddDigits<
        NormalisedLeftChunk,
        [],
        AddCarryDigit<LastLeftDigit, 0, Carry>,
        [AddDigit<LastLeftDigit, 0, Carry>, ...Result]
      >
  : SeparateChunks<NormalisedRight> extends ChunkPairs<
      infer NormalisedRightChunk,
      infer LastRightDigit
    >
  ? AddDigits<
      [],
      NormalisedRightChunk,
      AddCarryDigit<0, LastRightDigit, Carry>,
      [AddDigit<0, LastRightDigit, Carry>, ...Result]
    >
  : Carry extends 1
  ? [1, ...Result]
  : Result;

type Test = AddDigits<[1, 2, 4, 2, 3, 3, 1, 6, 7], [4, 5, 6]>;
