import type { Digit, Size } from "@ibnlanre/types";

import type { CompareNumbers } from "../compare-numbers";
import type { DigitsToUnsignedFloat } from "../digits-to-unsigned-float";
import type { PadStart } from "../pad-start";

export type SafeDigitsToUnsignedFloat<
  Digits extends Digit[],
  DecimalPlaces extends number
> = CompareNumbers<Size<Digits>, DecimalPlaces> extends -1
  ? DigitsToUnsignedFloat<PadStart<Digits, DecimalPlaces>, DecimalPlaces>
  : DigitsToUnsignedFloat<Digits, DecimalPlaces>;
