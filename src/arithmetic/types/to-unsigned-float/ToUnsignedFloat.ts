import { DecomposeNumber } from "../decompose-number";
import { Sign } from "../sign";
import { SplitIntoDigits } from "../split-into-digits";
import { UnsignedFloat } from "../unsigned-float";

export type ToUnsignedFloat<N extends number> = DecomposeNumber<N> extends [
  Sign,
  infer Integer extends string,
  infer Float extends string
]
  ? UnsignedFloat<SplitIntoDigits<Integer>, SplitIntoDigits<Float>>
  : never;
