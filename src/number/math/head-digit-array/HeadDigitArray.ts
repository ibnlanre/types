import type { Digit } from "@ibnlanre/types";

export type HeadDigitArray<Rest extends Digit[], Tail extends Digit = Digit> = [
  ...Rest,
  Tail
];
