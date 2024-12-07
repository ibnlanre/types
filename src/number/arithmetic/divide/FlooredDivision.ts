import type { Floor, Math } from "@ibnlanre/types";

export type FlooredDivision<
  Dividend extends number,
  Divisor extends number
> = Floor<Math.Divide<Dividend, Divisor>>;
