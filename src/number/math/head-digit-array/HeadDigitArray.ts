import type { Digit } from "@ibnlanre/types";

export type HeadDigitArray<Head extends Digit[], Last extends Digit = Digit> = [
  ...Head,
  Last
];
