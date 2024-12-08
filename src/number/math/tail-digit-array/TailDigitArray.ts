import type { Digit } from "@ibnlanre/types";

export type TailDigitArray<
  First extends Digit,
  Tail extends Digit[] = Digit[]
> = [First, ...Tail];
