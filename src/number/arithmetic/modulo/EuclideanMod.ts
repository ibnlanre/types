import { Math } from "@ibnlanre/types";

export type EuclideanMod<
  Dividend extends number,
  Divisor extends number
> = Math.Absolute<Divisor> extends infer R extends number
  ? Math.Mod<Math.Add<Math.Mod<Dividend, R>, R>, R>
  : never;
