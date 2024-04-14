import { Bit } from "@ibnlanre/types";

import { IsUnsignedFloatEven } from "../is-unsigned-float-even";
import { ToUnsignedFloat } from "../to-unsigned-float";

export type IsEven<Number extends number> = number extends Number
  ? Bit
  : Number extends Number
  ? IsUnsignedFloatEven<ToUnsignedFloat<Number>>
  : never;
