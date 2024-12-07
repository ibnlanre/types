import type { Bit } from "@ibnlanre/types";

import type { IsUnsignedFloatEven } from "../is-unsigned-float-even";
import type { ToUnsignedFloat } from "../to-unsigned-float";

export type IsEven<Number extends number> = number extends Number
  ? Bit
  : Number extends Number
  ? IsUnsignedFloatEven<ToUnsignedFloat<Number>>
  : never;
