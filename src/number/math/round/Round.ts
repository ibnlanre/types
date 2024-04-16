import { Absolute } from "../absolute";
import { Add } from "../add";
import { Floor } from "../floor";
import { Mod } from "../mod";
import { Multiply } from "../multiply";
import { Signum } from "../signum";
import { Subtract } from "../subtract";

export type Round<
  Value extends number,
  MidPointRounding extends "AwayFromZero" | "ToEven" = "ToEven"
> = MidPointRounding extends "AwayFromZero"
  ? Multiply<Signum<Value>, Floor<Add<Absolute<Value>, 0.5>>>
  : Floor<Subtract<Add<Value, 0.5>, Mod<Floor<Add<Value, 0.5>>, 1>>>;
