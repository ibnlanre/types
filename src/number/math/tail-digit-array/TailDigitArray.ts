import type { Digit } from "@ibnlanre/types";

export type TailDigitArray<
  Head extends Digit,
  Rest extends Digit[] = Digit[]
> = [Head, ...Rest];
