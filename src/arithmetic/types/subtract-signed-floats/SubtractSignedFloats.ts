import {
  AddUnsignedFloats,
  NegateSignedFloat,
  SignedFloat,
  SubtractUnsignedFloats,
} from "..";

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
