import { FlipSign } from "../flip-sign";
import { SignedFloat } from "../signed-float";

export type NegateSignedFloat<SignedDigits extends SignedFloat> =
  SignedDigits extends SignedFloat<infer Sign, infer UnsignedFloat>
    ? SignedFloat<FlipSign<Sign>, UnsignedFloat>
    : never;
