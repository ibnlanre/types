import { Divide, Floor } from "@ibnlanre/types";

export type FlooredDivision<
  Dividend extends number,
  Divisor extends number
> = Floor<Divide<Dividend, Divisor>>;
