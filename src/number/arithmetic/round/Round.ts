import { Floor, Fn, Math } from "@ibnlanre/types";

export type Round<
  Value extends number,
  MidPointRounding extends "AwayFromZero" | "ToEven" = "ToEven"
> = MidPointRounding extends "AwayFromZero"
  ? Math.Multiply<
      Math.Signum<Value>,
      Floor<Math.Add<Math.Absolute<Value>, 0.5>>
    >
  : Floor<
      Math.Subtract<
        Math.Add<Value, 0.5>,
        Math.Mod<Floor<Math.Add<Value, 0.5>>, 1>
      >
    >;

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
