import type { Bit, Fn, If } from "@ibnlanre/types";

export type ElseIf<
  Comparison extends Bit,
  Positive extends unknown = never,
  Zero extends unknown = never
> = If<Comparison, Positive, Zero>;

export interface TElseIf<
  Positive extends unknown | void = never,
  Zero extends unknown | void = never,
  Comparison extends Bit | void = void
> extends Fn<{
    0: unknown;
    1: unknown;
    2: Bit;
  }> {
  slot: [Positive, Zero, Comparison];
  data: ElseIf<this[2], this[0], this[1]>;
}
