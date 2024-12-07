import type { Pop, Shift } from "@ibnlanre/types";

import type { MakeUnsignedFloat } from "../make-unsigned-float";
import type { Sign } from "../sign";
import type { SignedFloat } from "../signed-float";
import type { SignedFloatZero } from "../signed-float-zero";
import type { UnsignedFloat } from "../unsigned-float";
import type { UnsignedFloatZero } from "../unsigned-float-zero";

export type MakeSignedFloat<
  TSign extends Sign,
  UnsignedDigits extends UnsignedFloat
> = MakeUnsignedFloat<
  Shift<UnsignedDigits>,
  Pop<UnsignedDigits>
> extends infer ActualUnsignedFloat extends UnsignedFloat
  ? ActualUnsignedFloat extends UnsignedFloatZero
    ? SignedFloatZero
    : SignedFloat<TSign, ActualUnsignedFloat>
  : never;
