import type { Digit } from "@ibnlanre/types";

import type { DivideUnsignedFloats } from "../divide-unsigned-floats";
import type { ModResult } from "../mod-result";
import type { SafeDigitsToUnsignedFloat } from "../safe-digits-to-unsigned-float";
import type { UnsignedFloat } from "../unsigned-float";

export type ModUnsignedFloats<
  Numerator extends UnsignedFloat,
  Divisor extends UnsignedFloat
> = DivideUnsignedFloats<Numerator, Divisor, true> extends [
  ModResult<infer Remainder, Digit[]>,
  infer DecimalPlaces extends number
]
  ? SafeDigitsToUnsignedFloat<Remainder, DecimalPlaces>
  : never;
