import { Fn } from "@ibnlanre/types";

import { EuclideanKnuthianMod } from "./EuclideanKnuthianMod";
import { EuclideanMod } from "./EuclideanMod";
import { FlooredMod } from "./FlooredMod";
import { TruncatingMod } from "./TruncatingMod";

/**
 * Returns the remainder of the division of `Dividend` by `Divisor`.
 *
 * @description
 * - If both dividend and divisor are positive, then all three definitions agree.
 * - If the dividend is positive and the divisor is negative, then the truncating and Euclidean definitions agree.
 * - If the dividend is negative and the divisor is positive, then the flooring and Euclidean definitions agree.
 * - If both dividend and divisor are negative, then the truncating and flooring definitions agree.
 */
export type Modulo<
  Dividend extends number,
  Divisor extends number,
  Type extends
    | "Euclidean"
    | "Euclidean-Knuthian"
    | "Truncating"
    | "Floored" = "Euclidean-Knuthian"
> = Type extends "Euclidean"
  ? EuclideanMod<Dividend, Divisor>
  : Type extends "Euclidean-Knuthian"
  ? EuclideanKnuthianMod<Dividend, Divisor>
  : Type extends "Truncating"
  ? TruncatingMod<Dividend, Divisor>
  : Type extends "Floored"
  ? FlooredMod<Dividend, Divisor>
  : never;

export interface TModulo<
  Divisor extends number | void = void,
  Type extends
    | "Euclidean"
    | "Euclidean-Knuthian"
    | "Truncating"
    | "Floored"
    | void = "Euclidean-Knuthian",
  Dividend extends number | void = void
> extends Fn<{
    0: number;
    1: "Euclidean" | "Euclidean-Knuthian" | "Truncating" | "Floored";
    2: number;
  }> {
  slot: [Divisor, Type, Dividend];
  data: Modulo<this[2], this[0], this[1]>;
}
