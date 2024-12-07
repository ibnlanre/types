import type { Digit, Push, Size } from "@ibnlanre/types";

import type { CompareNumbers } from "../compare-numbers";
import type { DivideMaxDigits } from "../divide-max-digits";
import type { EuclideanDivide } from "../euclidean-divide";
import type { EuclideanDivideResult } from "../euclidean-divide-result";

export type LongDivideFraction<
  Divisor extends Digit[],
  Numerator extends Digit[],
  Quotient extends Digit[] = []
> = CompareNumbers<Size<Quotient>, DivideMaxDigits> extends 1
  ? Quotient
  : EuclideanDivide<Numerator, Divisor> extends EuclideanDivideResult<
      infer Remainder,
      infer NextQuotientDigit
    >
  ? Remainder extends [0]
    ? Push<Quotient, NextQuotientDigit>
    : LongDivideFraction<
        Divisor,
        Push<Remainder, 0>,
        Push<Quotient, NextQuotientDigit>
      >
  : never;
