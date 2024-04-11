import { Digit } from "@ibnlanre/types";

export type HeadDigitArray<Head extends Digit[], Last extends Digit> = [
  ...Head,
  Last
];
