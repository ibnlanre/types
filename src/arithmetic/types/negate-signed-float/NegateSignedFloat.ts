import { FlipSign, SignedFloat } from "..";

export type NegateSignedFloat<SignedDigits extends SignedFloat> =
  SignedDigits extends SignedFloat<infer Sign, infer UnsignedFloat>
    ? SignedFloat<FlipSign<Sign>, UnsignedFloat>
    : never;
