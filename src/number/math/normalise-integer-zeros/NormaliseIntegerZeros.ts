import type { Digit, TrimHead } from "@ibnlanre/types";

export type NormaliseIntegerZeros<NormalisedIntegers extends Digit[]> =
  TrimHead<NormalisedIntegers, 0> extends infer Trimmed extends Digit[]
    ? Trimmed extends []
      ? [0]
      : Trimmed
    : never;
