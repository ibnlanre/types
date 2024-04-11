import {
  AddUnsignedFloats,
  NegateSignedFloat,
  SignedFloat,
  SubtractUnsignedFloats,
} from "..";

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
