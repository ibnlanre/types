import { Digit } from "@ibnlanre/types";

import { EuclideanDivide } from "../euclidean-divide";
import { EuclideanDivideResult } from "../euclidean-divide-result";
import { LongDivideFraction } from "../long-divide-fraction";
import { MakeModResult } from "../make-mod-result";
import { MakeUnsignedFloat } from "../make-unsigned-float";
import { TailDigitArray } from "../tail-digit-array";

export type LongDivide<
  Divisor extends Digit[],
  NumeratorHead extends Digit[],
  NumeratorTail extends Digit[],
  Quotient extends Digit[] = [],
  WithRemainder extends boolean = false
> = EuclideanDivide<NumeratorHead, Divisor> extends EuclideanDivideResult<
  infer Remainder,
  infer NextQuotientDigit
>
  ? [...Quotient, NextQuotientDigit] extends infer NextQuotient extends Digit[]
    ? NumeratorTail extends TailDigitArray<infer NextDigit, infer NextTail>
      ? LongDivide<
          Divisor,
          [...Remainder, NextDigit],
          NextTail,
          NextQuotient,
          WithRemainder
        >
      : WithRemainder extends false
      ? MakeUnsignedFloat<
          NextQuotient,
          Remainder extends [0]
            ? []
            : LongDivideFraction<Divisor, [...Remainder, 0]>
        >
      : MakeModResult<Remainder, NextQuotient>
    : never
  : never;
