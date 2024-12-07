import type { LongDivide } from "../long-divide";
import type { Normalise } from "../normalise";
import type { NumberPair } from "../number-pair";
import type { TailDigitArray } from "../tail-digit-array";
import type { UnsignedFloat } from "../unsigned-float";

export type DivideUnsignedFloats<
  Numerator extends UnsignedFloat,
  Divisor extends UnsignedFloat,
  WithRemainder extends boolean = false
> = Normalise<Numerator, Divisor> extends [
  ...NumberPair<infer NumeratorDigits, infer DivisorDigits>,
  infer DecimalPlaces
]
  ? NumeratorDigits extends TailDigitArray<
      infer NumeratorHead,
      infer NumeratorTail
    >
    ? [
        LongDivide<
          DivisorDigits,
          [NumeratorHead],
          NumeratorTail,
          [],
          WithRemainder
        >,
        DecimalPlaces
      ]
    : never
  : never;
