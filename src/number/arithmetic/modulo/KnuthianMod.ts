import type { Floor, Math } from "@ibnlanre/types";

/**
 * @description
 * - It is no different from the Floored Modulo operator, except that it uses a different approach.
 */
export type KnuthianMod<
  Dividend extends number,
  Divisor extends number
> = Math.Subtract<
  Dividend,
  Math.Multiply<Floor<Math.Divide<Dividend, Divisor>>, Divisor>
>;
