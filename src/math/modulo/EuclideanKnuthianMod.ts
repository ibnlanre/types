import { Floor } from "@ibnlanre/types";
import { Divide, Multiply, Subtract } from "ts-arithmetic";

/**
 * @description
 * - It is no different from the Euclidean Modulo operator, except that it uses a different approach.
 */
export type EuclideanKnuthianMod<
  Dividend extends number,
  Divisor extends number
> = Subtract<Dividend, Multiply<Floor<Divide<Dividend, Divisor>>, Divisor>>;
