import type { RoundFloat } from "../round-float";
import type { SignedFloat } from "../signed-float/SignedFloat";
import type { UnsignedFloatToNumber } from "../unsigned-float-to-number";

export type SignedFloatToNumber<SignedDigits extends SignedFloat> =
  RoundFloat<SignedDigits> extends SignedFloat<
    infer TSign,
    infer UnsignedDigits
  >
    ? UnsignedFloatToNumber<UnsignedDigits, TSign>
    : never;
