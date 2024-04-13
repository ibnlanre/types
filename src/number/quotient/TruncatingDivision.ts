import { Divide, Trunc } from "@ibnlanre/types";

export type TruncatingDivision<
  Dividend extends number,
  Divisor extends number
> = Trunc<Divide<Dividend, Divisor>>;
