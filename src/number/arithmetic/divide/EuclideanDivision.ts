import type { Floor, Math } from "@ibnlanre/types";

export type EuclideanDivision<
  Dividend extends number,
  Divisor extends number
> = Math.Multiply<
  Math.Signum<Divisor>,
  Floor<Math.Divide<Dividend, Math.Absolute<Divisor>>>
>;
