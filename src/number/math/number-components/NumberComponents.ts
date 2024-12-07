import type { Sign } from "../sign";

/**
 * Tuple of digits representing the components of a number.
 */
export type NumberComponents<
  TSign extends Sign,
  Integers extends string,
  Fraction extends string
> = [
  sign: Integers | Fraction extends "" ? "+" : TSign,
  integers: Integers,
  fraction: Fraction
];
