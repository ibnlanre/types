import type { Math } from "@ibnlanre/types";

export type TruncatingMod<
  Dividend extends number,
  Divisor extends number
> = Math.Mod<Dividend, Divisor>;
