import type { MakeSignedNumber } from "../make-signed-number";
import type { Sign } from "../sign";
import type { ToDecimalString } from "../to-decimal-string";
import type { ToSmallFractionString } from "../to-small-fraction-string";
import type { UnsignedFloat } from "../unsigned-float/UnsignedFloat";

export type UnsignedFloatToNumber<
  UnsignedNormalisedDigits extends UnsignedFloat,
  TSign extends Sign
> = UnsignedNormalisedDigits extends UnsignedFloat<
  infer IntegerDigits,
  infer FractionalDigits
>
  ? IntegerDigits extends [0]
    ? MakeSignedNumber<ToSmallFractionString<FractionalDigits>, TSign>
    : MakeSignedNumber<ToDecimalString<IntegerDigits, FractionalDigits>, TSign>
  : never;
