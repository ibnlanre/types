import { ParseInt } from "@ibnlanre/types";
import { Mod } from "ts-arithmetic";

export type HourOfDay<Meridiem extends string, Out extends 12 | 24 = 24> = Mod<
  ParseInt<Meridiem>,
  Out
> extends infer R extends number
  ? R extends 0
    ? Out extends 12
      ? 12
      : 0
    : R
  : never;
