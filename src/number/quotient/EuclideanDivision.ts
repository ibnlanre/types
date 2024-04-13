import { Abs, Divide, Floor, Multiply, Sign } from "@ibnlanre/types";

export type EuclideanDivision<
  Dividend extends number,
  Divisor extends number
> = Multiply<Sign<Divisor>, Floor<Divide<Dividend, Abs<Divisor>>>>;
