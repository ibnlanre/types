import { Fn } from "@ibnlanre/types";
import { Add as Addition } from "ts-arithmetic";

/**
 * Adds two numbers.
 *
 * @param Addend - The first number to add.
 * @param Augend - The second number to add.
 *
 * @returns The sum of the two numbers.
 */
export type Add<Augend extends number, Addend extends number> = Addition<
  Augend,
  Addend
>;

/**
 * Adds two numbers.
 *
 * @param Addend - The first number to add.
 * @param Augend - The second number to add.
 *
 * @returns The sum of the two numbers.
 *
 * @example
 * type Test = Call<TAdd<5, 5>>; // 10
 * type Test = Apply<Add<6>, [4]>; // 10
 */
export interface TAdd<
  Addend extends number | void = void,
  Augend extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Addend, Augend];
  data: Add<this[1], this[0]>;
}
