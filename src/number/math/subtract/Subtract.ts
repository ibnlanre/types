import type { AnyExtend, Negate } from "@ibnlanre/types";
import type { SubtractNumbers } from "../subtract-numbers";

export type Subtract<Left extends number, Right extends number> = AnyExtend<
  [Left, Right],
  never
> extends 1
  ? never
  : number extends Left | Right
  ? number
  : Left extends 0
  ? Negate<Right>
  : Right extends 0
  ? Left
  : SubtractNumbers<Left, Right>;
