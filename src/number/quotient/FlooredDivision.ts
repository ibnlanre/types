import { Floor } from "@ibnlanre/types";
import { Divide } from "ts-arithmetic";

export type FlooredDivision<
  Dividend extends number,
  Divisor extends number
> = Floor<Divide<Dividend, Divisor>>;
