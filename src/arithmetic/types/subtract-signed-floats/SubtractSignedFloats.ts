import {
  AddUnsignedFloats,
  NegateSignedFloat,
  SignedFloat,
  SubtractUnsignedFloats,
} from "..";

export type SubtractSignedFloats<
  X extends SignedFloat,
  Y extends SignedFloat
> = X extends SignedFloat<infer XSign, infer XUnsignedFloat>
  ? Y extends SignedFloat<infer YSign, infer YUnsignedFloat>
    ? XSign extends "-"
      ? YSign extends "-"
        ? NegateSignedFloat<
            SubtractUnsignedFloats<XUnsignedFloat, YUnsignedFloat>
          >
        : SignedFloat<"-", AddUnsignedFloats<XUnsignedFloat, YUnsignedFloat>>
      : YSign extends "-"
      ? SignedFloat<"+", AddUnsignedFloats<XUnsignedFloat, YUnsignedFloat>>
      : SubtractUnsignedFloats<XUnsignedFloat, YUnsignedFloat>
    : never
  : never;
