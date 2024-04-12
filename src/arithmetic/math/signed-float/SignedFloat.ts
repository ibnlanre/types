import { Sign } from "../sign";
import { UnsignedFloat } from "../unsigned-float";

export type SignedFloat<
  TSign extends Sign = Sign,
  TNumber extends UnsignedFloat = UnsignedFloat
> = [sign: TSign, float: TNumber];
