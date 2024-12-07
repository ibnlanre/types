import type { SignedFloat } from "../signed-float";
import type { UnsignedFloatZero } from "../unsigned-float-zero";

export type SignedFloatZero = SignedFloat<"+", UnsignedFloatZero>;
