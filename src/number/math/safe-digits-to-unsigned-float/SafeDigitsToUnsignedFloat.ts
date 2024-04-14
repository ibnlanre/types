import { Digit, Size } from "@ibnlanre/types";

import { CompareNumbers } from "../compare-numbers";
import { DigitsToUnsignedFloat } from "../digits-to-unsigned-float";
import { PadStart } from "../pad-start";

export type SafeDigitsToUnsignedFloat<
  Digits extends Digit[],
  DecimalPlaces extends number
> = CompareNumbers<Size<Digits>, DecimalPlaces> extends -1
  ? DigitsToUnsignedFloat<PadStart<Digits, DecimalPlaces, 0>, DecimalPlaces>
  : DigitsToUnsignedFloat<Digits, DecimalPlaces>;
