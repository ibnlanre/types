import type { Fn, Math } from "@ibnlanre/types";

/**
 * Adds two numbers.
 *
 * @param Augend - The number to add to.
 * @param Addend - The number to add.
 *
 * @returns The sum of the two numbers.
 */
export type Add<Augend extends number, Addend extends number> = Math.Add<
  Augend,
  Addend
>;

/**
 * Adds two numbers.
 *
 * @param Addend - The number to add.
 * @param Augend - The number to add to.
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
