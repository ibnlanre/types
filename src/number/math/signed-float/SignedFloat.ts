import type { Sign } from "../sign";
import type { UnsignedFloat } from "../unsigned-float";

export type SignedFloat<
  TSign extends Sign = Sign,
  TNumber extends UnsignedFloat = UnsignedFloat
> = [sign: TSign, float: TNumber];
