import { Digit, Flat, Size } from "@ibnlanre/types";
import { UnsignedFloat } from "../unsigned-float";

export type FloatDigitCount<UnsignedDigits extends UnsignedFloat> =
  Flat<UnsignedDigits> extends infer Digits extends Digit[]
    ? Size<Digits>
    : never;
