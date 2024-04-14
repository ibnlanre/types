import { LongDivide } from "../long-divide";
import { Normalise } from "../normalise";
import { NumberPair } from "../number-pair";
import { TailDigitArray } from "../tail-digit-array";
import { UnsignedFloat } from "../unsigned-float";

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
