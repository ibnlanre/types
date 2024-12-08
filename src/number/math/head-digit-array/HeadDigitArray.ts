import type { Digit } from "@ibnlanre/types";

export type HeadDigitArray<Head extends Digit[], Tail extends Digit = Digit> = [
  ...Head,
  Tail
];
