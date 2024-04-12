import { Digit } from "@ibnlanre/types";
import { HeadDigitArray } from "../head-digit-array";

export type CompareDigits<
  Left extends Digit,
  Right extends Digit
> = Left extends Right ? 0 : CompareDigitsHelper<Left, Right>;

type CompareDigitsHelper<
  Left extends Digit,
  Right extends Digit,
  Digits extends Digit[] = Digit.Tuple
> = Digits extends HeadDigitArray<infer Head, infer LastDigit>
  ? Left extends LastDigit
    ? 1
    : Right extends LastDigit
    ? -1
    : CompareDigitsHelper<Left, Right, Head>
  : never;
