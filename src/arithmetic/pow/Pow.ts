import { Fn, Math } from "@ibnlanre/types";

export type Pow<Base extends number, Exponent extends number> = Math.Power<
  Base,
  Exponent
>;

export interface TPow<
  Exponent extends number | void = void,
  Base extends number | void = void
> extends Fn<{
    0: number;
    1: number;
  }> {
  slot: [Exponent, Base];
  data: Pow<this[1], this[0]>;
}
