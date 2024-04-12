import { InferNumber } from "../infer-number";
import { Sign } from "../sign";
import { ToDecimalString } from "../to-decimal-string";
import { ToSmallFractionString } from "../to-small-fraction-string";
import { UnsignedFloat } from "../unsigned-float/UnsignedFloat";

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
