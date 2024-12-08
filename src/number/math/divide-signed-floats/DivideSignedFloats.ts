import type { Shift } from "@ibnlanre/types";

import type { DivideUnsignedFloats } from "../divide-unsigned-floats";
import type { MultiplySigns } from "../multiply-signs";
import type { SignedFloat } from "../signed-float";

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
        Shift<
          DivideUnsignedFloats<NumeratorUnsignedFloat, DivisorUnsignedFloat>
        >
      >
    : never
  : never;
