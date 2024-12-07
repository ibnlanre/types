import type { DecomposeNumber } from "../decompose-number";
import type { NumberComponents } from "../number-components";
import type { SignedFloat } from "../signed-float";
import type { SplitIntoDigits } from "../split-into-digits";
import type { UnsignedFloat } from "../unsigned-float";

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
