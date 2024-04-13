import {
  Abs,
  Add,
  Floor,
  Fn,
  Mod,
  Multiply,
  Sign,
  Subtract,
} from "@ibnlanre/types";

export type Round<
  Value extends number,
  MidPointRounding extends "AwayFromZero" | "ToEven" = "ToEven"
> = MidPointRounding extends "AwayFromZero"
  ? Multiply<Sign<Value>, Floor<Add<Abs<Value>, 0.5>>>
  : Floor<Subtract<Add<Value, 0.5>, Mod<Floor<Add<Value, 0.5>>, 1>>>;

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
