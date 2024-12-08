import type { Digit } from "@ibnlanre/types";

export type TailDigitArray<
  Head extends Digit,
  Tail extends Digit[] = Digit[]
> = [Head, ...Tail];
