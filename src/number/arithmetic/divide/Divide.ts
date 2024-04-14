import { Fn } from "@ibnlanre/types";

import { EuclideanDivision } from "./EuclideanDivision";
import { FlooredDivision } from "./FlooredDivision";
import { TruncatingDivision } from "./TruncatingDivision";

export type Divide<
  Dividend extends number,
  Divisor extends number,
  Type extends "Euclidean" | "Truncating" | "Floored" = "Truncating"
> = Type extends "Euclidean"
  ? EuclideanDivision<Dividend, Divisor>
  : Type extends "Truncating"
  ? TruncatingDivision<Dividend, Divisor>
  : Type extends "Floored"
  ? FlooredDivision<Dividend, Divisor>
  : never;

export interface TDivide<
  Divisor extends number | void = void,
  Type extends "Euclidean" | "Truncating" | "Floored" | void = "Truncating",
  Dividend extends number | void = void
> extends Fn<{
    0: number;
    1: "Euclidean" | "Truncating" | "Floored";
    2: number;
  }> {
  slot: [Divisor, Type, Dividend];
  data: Divide<this[2], this[0], this[1]>;
}
