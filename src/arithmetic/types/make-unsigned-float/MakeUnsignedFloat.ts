import { Digit } from "@ibnlanre/types";
import {
  NormaliseFractionalZeros,
  NormaliseIntegerZeros,
  UnsignedFloat,
} from "..";

export type MakeUnsignedFloat<
  Integers extends Digit[],
  Fraction extends Digit[] = []
> = UnsignedFloat<
  NormaliseIntegerZeros<Integers>,
  NormaliseFractionalZeros<Fraction>
>;
