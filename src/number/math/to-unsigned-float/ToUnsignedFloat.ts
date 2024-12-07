import type { DecomposeNumber } from "../decompose-number";
import type { Sign } from "../sign";
import type { SplitIntoDigits } from "../split-into-digits";
import type { UnsignedFloat } from "../unsigned-float";

export type ToUnsignedFloat<Number extends number> =
  DecomposeNumber<Number> extends [
    Sign,
    infer Integer extends string,
    infer Float extends string
  ]
    ? UnsignedFloat<SplitIntoDigits<Integer>, SplitIntoDigits<Float>>
    : never;
