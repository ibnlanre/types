import { DecomposeNumber } from "../decompose-number";
import { NumberComponents } from "../number-components";
import { SignedFloat } from "../signed-float";
import { SplitIntoDigits } from "../split-into-digits";
import { UnsignedFloat } from "../unsigned-float";

export type ToSignedFloat<N extends number> =
  DecomposeNumber<N> extends NumberComponents<
    infer TSign,
    infer Integer,
    infer Float
  >
    ? SignedFloat<
        TSign,
        UnsignedFloat<SplitIntoDigits<Integer>, SplitIntoDigits<Float>>
      >
    : never;
