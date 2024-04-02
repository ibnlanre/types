import { Trunc } from "@ibnlanre/types";
import { Divide } from "ts-arithmetic";

export type TruncatingDivision<
  Dividend extends number,
  Divisor extends number
> = Trunc<Divide<Dividend, Divisor>>;
