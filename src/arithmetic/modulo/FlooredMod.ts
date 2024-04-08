import { Add, Mod } from "ts-arithmetic";

export type FlooredMod<Dividend extends number, Divisor extends number> = Mod<
  Add<Mod<Dividend, Divisor>, Divisor>,
  Divisor
>;
