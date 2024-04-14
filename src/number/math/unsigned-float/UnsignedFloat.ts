import { Digit } from "@ibnlanre/types";

export type UnsignedFloat<
  IntegerDigits extends Digit[] = Digit[],
  FractionalDigits extends Digit[] = Digit[]
> = [integers: IntegerDigits, fraction: FractionalDigits];
