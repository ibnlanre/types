import { RoundFloat } from "../round-float";
import { SignedFloat } from "../signed-float/SignedFloat";
import { UnsignedFloatToNumber } from "../unsigned-float-to-number";

export type SignedFloatToNumber<SignedDigits extends SignedFloat> =
  RoundFloat<SignedDigits> extends SignedFloat<
    infer TSign,
    infer UnsignedDigits
  >
    ? UnsignedFloatToNumber<UnsignedDigits, TSign>
    : never;
