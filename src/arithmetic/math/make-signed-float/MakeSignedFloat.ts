import { Pop, Shift } from "@ibnlanre/types";

import { MakeUnsignedFloat } from "../make-unsigned-float";
import { Sign } from "../sign";
import { SignedFloat } from "../signed-float";
import { SignedFloatZero } from "../signed-float-zero";
import { UnsignedFloat } from "../unsigned-float";
import { UnsignedFloatZero } from "../unsigned-float-zero";

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
