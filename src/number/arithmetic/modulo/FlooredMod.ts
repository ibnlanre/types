import type { Math } from "@ibnlanre/types";

export type FlooredMod<
  Dividend extends number,
  Divisor extends number
> = Math.Mod<Math.Add<Math.Mod<Dividend, Divisor>, Divisor>, Divisor>;
