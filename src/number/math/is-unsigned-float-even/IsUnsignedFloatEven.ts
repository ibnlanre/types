import type { Pop, Shift } from "@ibnlanre/types";

import type { IsEvenDigit } from "../is-even-digit";
import type { UnsignedFloat } from "../unsigned-float";

export type IsUnsignedFloatEven<Float extends UnsignedFloat> =
  Pop<Float> extends [] ? IsEvenDigit<Shift<Float>> : never;
