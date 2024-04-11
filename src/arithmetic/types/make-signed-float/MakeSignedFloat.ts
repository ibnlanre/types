import { Pop, Shift } from "@ibnlanre/types";
import {
  MakeUnsignedFloat,
  Sign,
  SignedFloat,
  SignedFloatZero,
  UnsignedFloat,
  UnsignedFloatZero,
} from "..";

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
