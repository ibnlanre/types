import { Math, Trunc } from "@ibnlanre/types";

export type TruncatingDivision<
  Dividend extends number,
  Divisor extends number
> = Trunc<Math.Divide<Dividend, Divisor>>;
