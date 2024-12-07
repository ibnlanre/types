import type { Digit } from "@ibnlanre/types";

export type SmallEnoughForScientificNotation<
  TFractionalDigits extends Digit[]
> = TFractionalDigits extends [0, 0, 0, 0, 0, 0, ...Digit[]] ? 1 : 0;
