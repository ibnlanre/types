import type { AddUnsignedFloats } from "../add-unsigned-floats";
import type { NegateSignedFloat } from "../negate-signed-float";
import type { SignedFloat } from "../signed-float";
import type { SubtractUnsignedFloats } from "../subtract-unsigned-floats";

export type SubtractSignedFloats<
  Left extends SignedFloat,
  Right extends SignedFloat
> = Left extends SignedFloat<infer LeftSign, infer LeftUnsignedFloat>
  ? Right extends SignedFloat<infer RightSign, infer RightUnsignedFloat>
    ? LeftSign extends "-"
      ? RightSign extends "-"
        ? NegateSignedFloat<
            SubtractUnsignedFloats<LeftUnsignedFloat, RightUnsignedFloat>
          >
        : SignedFloat<
            "-",
            AddUnsignedFloats<LeftUnsignedFloat, RightUnsignedFloat>
          >
      : RightSign extends "-"
      ? SignedFloat<
          "+",
          AddUnsignedFloats<LeftUnsignedFloat, RightUnsignedFloat>
        >
      : SubtractUnsignedFloats<LeftUnsignedFloat, RightUnsignedFloat>
    : never
  : never;
