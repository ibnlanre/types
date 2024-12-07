import type { Digit } from "@ibnlanre/types";

import type { NormaliseFractionalZeros } from "../normalise-fractional-zeros";
import type { NormaliseIntegerZeros } from "../normalise-integer-zeros";
import type { UnsignedFloat } from "../unsigned-float";

export type MakeUnsignedFloat<
  Integers extends Digit[],
  Fraction extends Digit[] = []
> = UnsignedFloat<
  NormaliseIntegerZeros<Integers>,
  NormaliseFractionalZeros<Fraction>
>;
