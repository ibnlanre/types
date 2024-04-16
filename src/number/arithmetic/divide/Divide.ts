import { Fn, Math } from "@ibnlanre/types";

import { EuclideanDivision } from "./EuclideanDivision";
import { FlooredDivision } from "./FlooredDivision";
import { TruncatingDivision } from "./TruncatingDivision";

type TypeOptions = "Euclidean" | "Truncating" | "Floored" | "Integer";

export type Divide<
  Dividend extends number,
  Divisor extends number,
  Type extends TypeOptions = "Integer"
> = Type extends "Integer"
  ? Math.Divide<Dividend, Divisor>
  : Type extends "Euclidean"
  ? EuclideanDivision<Dividend, Divisor>
  : Type extends "Truncating"
  ? TruncatingDivision<Dividend, Divisor>
  : Type extends "Floored"
  ? FlooredDivision<Dividend, Divisor>
  : never;

export interface TDivide<
  Divisor extends number | void = void,
  Type extends TypeOptions | void = "Integer",
  Dividend extends number | void = void
> extends Fn<{
    0: number;
    1: TypeOptions;
    2: number;
  }> {
  slot: [Divisor, Type, Dividend];
  data: Divide<this[2], this[0], this[1]>;
}
