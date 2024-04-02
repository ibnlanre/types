import { Abs, Add, Mod } from "ts-arithmetic";

export type EuclideanMod<
  Dividend extends number,
  Divisor extends number
> = Abs<Divisor> extends infer R extends number
  ? Mod<Add<Mod<Dividend, R>, R>, R>
  : never;
