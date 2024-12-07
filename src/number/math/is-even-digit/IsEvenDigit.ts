import type { Digit } from "@ibnlanre/types";
import type { HeadDigitArray } from "../head-digit-array";

export type IsEvenDigit<DigitArray extends Digit[]> =
  DigitArray extends HeadDigitArray<any, infer LastDigit>
    ? LastDigit extends 0 | 2 | 4 | 6 | 8
      ? 1
      : 0
    : never;
