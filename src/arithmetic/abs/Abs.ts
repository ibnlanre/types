import { Fn } from "@ibnlanre/types";
import { Abs as MAbs } from "ts-arithmetic";

/**
 * Returns the absolute value of a number.
 *
 * @param Number - The number to get the absolute value of.
 * @returns The absolute value of the number.
 *
 * @example
 * type Test = Call<TAbs<-5>>; // 5
 * type Test = Apply<TAbs, [5]>; // 5
 */
export interface TAbs<Number extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Number];
  data: Abs<this[0]>;
}

/**
 * Returns the absolute value of a number.
 *
 * @param Number - The number to get the absolute value of.
 * @returns The absolute value of the number.
 *
 * @example
 * type Test = Abs<-5>; // 5
 * type Test = Abs<5>; // 5
 */
export type Abs<Number extends number> = MAbs<Number>;
