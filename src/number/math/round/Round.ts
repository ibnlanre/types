import type { Absolute } from "../absolute";
import type { Add } from "../add";
import type { Floor } from "../floor";
import type { Mod } from "../mod";
import type { Multiply } from "../multiply";
import type { Signum } from "../signum";
import type { Subtract } from "../subtract";

export type Round<
  Value extends number,
  MidPointRounding extends "AwayFromZero" | "ToEven" = "ToEven"
> = MidPointRounding extends "AwayFromZero"
  ? Multiply<Signum<Value>, Floor<Add<Absolute<Value>, 0.5>>>
  : Floor<Subtract<Add<Value, 0.5>, Mod<Floor<Add<Value, 0.5>>, 1>>>;
