import { DivideUnsignedFloats } from "../divide-unsigned-floats";
import { MultiplySigns } from "../multiply-signs";
import { SignedFloat } from "../signed-float";

export type DivideSignedFloats<
  Numerator extends SignedFloat,
  Divisor extends SignedFloat
> = Numerator extends SignedFloat<
  infer NumeratorSign,
  infer NumeratorUnsignedFloat
>
  ? Divisor extends SignedFloat<infer DivisorSign, infer DivisorUnsignedFloat>
    ? SignedFloat<
        MultiplySigns<NumeratorSign, DivisorSign>,
        DivideUnsignedFloats<NumeratorUnsignedFloat, DivisorUnsignedFloat>[0]
      >
    : never
  : never;
