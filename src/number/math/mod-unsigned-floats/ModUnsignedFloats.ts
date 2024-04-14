import { Digit } from "@ibnlanre/types";

import { DivideUnsignedFloats } from "../divide-unsigned-floats";
import { ModResult } from "../mod-result";
import { SafeDigitsToUnsignedFloat } from "../safe-digits-to-unsigned-float";
import { UnsignedFloat } from "../unsigned-float";

export type ModUnsignedFloats<
  Numerator extends UnsignedFloat,
  Divisor extends UnsignedFloat
> = DivideUnsignedFloats<Numerator, Divisor, true> extends [
  ModResult<infer Remainder, Digit[]>,
  infer DecimalPlaces extends number
]
  ? SafeDigitsToUnsignedFloat<Remainder, DecimalPlaces>
  : never;
