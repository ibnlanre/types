import type { MultiplySigns } from "../multiply-signs";
import type { MultiplyUnsignedFloats } from "../multiply-unsigned-floats";
import type { SignedFloat } from "../signed-float";

export type MultiplySignedFloats<
  Left extends SignedFloat,
  Right extends SignedFloat
> = Left extends SignedFloat<infer LeftSign, infer LeftUnsignedFloat>
  ? Right extends SignedFloat<infer RightSign, infer RightUnsignedFloat>
    ? SignedFloat<
        MultiplySigns<LeftSign, RightSign>,
        MultiplyUnsignedFloats<LeftUnsignedFloat, RightUnsignedFloat>
      >
    : never
  : never;
