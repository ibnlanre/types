import { Digit } from "@ibnlanre/types";

export type MakeChunks<NormalisedDigit extends Digit[]> =
  NormalisedDigit extends [...infer Rest, infer Last] ? [Rest, Last] : [];
