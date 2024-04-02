import { Floor, Sign } from "@ibnlanre/types";
import { Abs, Divide, Multiply } from "ts-arithmetic";

export type EuclideanDivision<
  Dividend extends number,
  Divisor extends number
> = Multiply<Sign<Divisor>, Floor<Divide<Dividend, Abs<Divisor>>>>;
