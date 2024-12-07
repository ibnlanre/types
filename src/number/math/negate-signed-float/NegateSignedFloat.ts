import type { FlipSign } from "../flip-sign";
import type { SignedFloat } from "../signed-float";

export type NegateSignedFloat<SignedDigits extends SignedFloat> =
  SignedDigits extends SignedFloat<infer Sign, infer UnsignedFloat>
    ? SignedFloat<FlipSign<Sign>, UnsignedFloat>
    : never;
