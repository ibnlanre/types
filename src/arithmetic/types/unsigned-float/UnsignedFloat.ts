import { Digit } from "@ibnlanre/types";

export type UnsignedFloat<
  Integers extends Digit[] = Digit[],
  Fractions extends Digit[] = Digit[]
> = [integers: Integers, fractions: Fractions];
