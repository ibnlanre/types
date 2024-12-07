import type { Digit, Flat, Size } from "@ibnlanre/types";
import type { UnsignedFloat } from "../unsigned-float";

export type FloatDigitCount<UnsignedDigits extends UnsignedFloat> =
  Flat<UnsignedDigits> extends infer Digits extends Digit[]
    ? Size<Digits>
    : never;
