import { Digit, Size } from "@ibnlanre/types";
import {
  RoundFloat,
  SignedFloat,
  SignedFloatToNumber,
  SmallEnoughForScientificNotation,
  SplitLeadingElements,
  TailDigitArray,
  ToDecimalString,
} from "..";

export type ToSmallFractionString<FractionalDigits extends Digit[]> =
  SmallEnoughForScientificNotation<FractionalDigits> extends 1
    ? SplitLeadingElements<FractionalDigits, 0> extends [
        infer FractionalZeros extends 0[],
        infer Significand extends Digit[]
      ]
      ? Significand extends TailDigitArray<
          infer SignificandInteger,
          infer SignificandFraction
        >
        ? Size<[0, ...FractionalZeros]> extends infer Exponent extends number
          ? `${SignedFloatToNumber<
              RoundFloat<
                SignedFloat<"+", [[SignificandInteger], SignificandFraction]>
              >
            >}e-${Exponent}`
          : never
        : never
      : never
    : ToDecimalString<[0], FractionalDigits>;
