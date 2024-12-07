import type { AddUnsignedFloats } from "../add-unsigned-floats";
import type { NegateSignedFloat } from "../negate-signed-float";
import type { SignedFloat } from "../signed-float";
import type { SubtractUnsignedFloats } from "../subtract-unsigned-floats";

export type AddSignedFloats<
  LeftSignedDigits extends SignedFloat,
  RightSignedDigits extends SignedFloat
> = LeftSignedDigits extends SignedFloat<
  infer LeftSign,
  infer LeftUnsignedFloat
>
  ? RightSignedDigits extends SignedFloat<
      infer RightSign,
      infer RightUnsignedFloat
    >
    ? LeftSign extends "-"
      ? RightSign extends "-"
        ? SignedFloat<
            "-",
            AddUnsignedFloats<LeftUnsignedFloat, RightUnsignedFloat>
          >
        : NegateSignedFloat<
            SubtractUnsignedFloats<LeftUnsignedFloat, RightUnsignedFloat>
          >
      : RightSign extends "-"
      ? SubtractUnsignedFloats<LeftUnsignedFloat, RightUnsignedFloat>
      : SignedFloat<
          "+",
          AddUnsignedFloats<LeftUnsignedFloat, RightUnsignedFloat>
        >
    : never
  : never;
