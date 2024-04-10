import { Sign, UnsignedFloat } from "..";

export type SignedFloat<
  TSign extends Sign = Sign,
  TNumber extends UnsignedFloat = UnsignedFloat
> = [sign: TSign, float: TNumber];
