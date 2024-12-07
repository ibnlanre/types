import type { Digit, Size } from "@ibnlanre/types";

import type { RoundFloat } from "../round-float";
import type { SignedFloat } from "../signed-float";
import type { SignedFloatToNumber } from "../signed-float-to-number";
import type { SmallEnoughForScientificNotation } from "../small-enough-for-scientific-notation";
import type { SplitLeadingElements } from "../split-leading-elements";
import type { TailDigitArray } from "../tail-digit-array";
import type { ToDecimalString } from "../to-decimal-string";

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
