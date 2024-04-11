import { Sign, ToDecimalString, UnsignedFloat } from "..";
import { InferNumber } from "../infer-number/InferNumber";
import { ToSmallFractionString } from "../to-small-fraction-string/ToSmallFractionString";

export type UnsignedFloatToNumber<
  UnsignedNormalisedDigits extends UnsignedFloat,
  TSign extends Sign
> = UnsignedNormalisedDigits extends UnsignedFloat<
  infer IntegerDigits,
  infer FractionalDigits
>
  ? IntegerDigits extends [0]
    ? InferNumber<ToSmallFractionString<FractionalDigits>, TSign>
    : InferNumber<ToDecimalString<IntegerDigits, FractionalDigits>, TSign>
  : never;
