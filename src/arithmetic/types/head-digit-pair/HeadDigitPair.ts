import { Digit } from "@ibnlanre/types";

export type HeadDigitPair<
  NormalisedRest extends Digit[],
  NormalisedLast extends Digit
> = [NormalisedRest, NormalisedLast];
