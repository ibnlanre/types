import { RoundFloat, SignedFloat, UnsignedFloatToNumber } from "..";

export type SignedFloatToNumber<SignedDigits extends SignedFloat> =
  RoundFloat<SignedDigits> extends SignedFloat<
    infer TSign,
    infer UnsignedDigits
  >
    ? UnsignedFloatToNumber<UnsignedDigits, TSign>
    : never;
