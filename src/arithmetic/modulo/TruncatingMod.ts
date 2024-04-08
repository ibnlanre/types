import { Mod } from "ts-arithmetic";

export type TruncatingMod<
  Dividend extends number,
  Divisor extends number
> = Mod<Dividend, Divisor>;
