import { Pop, Shift } from "@ibnlanre/types";

import { IsEvenDigit } from "../is-even-digit";
import { UnsignedFloat } from "../unsigned-float";

export type IsUnsignedFloatEven<Float extends UnsignedFloat> =
  Pop<Float> extends [] ? IsEvenDigit<Shift<Float>> : never;
