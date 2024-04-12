import { Digit } from "@ibnlanre/types";

import { NormaliseFractionalZeros } from "../normalise-fractional-zeros";
import { NormaliseIntegerZeros } from "../normalise-integer-zeros";
import { UnsignedFloat } from "../unsigned-float";

export type MakeUnsignedFloat<
  Integers extends Digit[],
  Fraction extends Digit[] = []
> = UnsignedFloat<
  NormaliseIntegerZeros<Integers>,
  NormaliseFractionalZeros<Fraction>
>;
