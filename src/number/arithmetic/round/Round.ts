import { Fn, Math } from "@ibnlanre/types";

export type Round<
  Value extends number,
  MidPointRounding extends "AwayFromZero" | "ToEven" = "ToEven"
> = Math.Round<Value, MidPointRounding>;

export interface TRound<
  MidPointRounding extends "AwayFromZero" | "ToEven" | void = "ToEven",
  Value extends number | void = void
> extends Fn<{
    0: "AwayFromZero" | "ToEven";
    1: number;
  }> {
  slot: [MidPointRounding, Value];
  data: Round<this[1], this[0]>;
}
