import type { Negate } from "@ibnlanre/types";
import type { SubtractNumbers } from "../subtract-numbers";

export type Subtract<
  Left extends number,
  Right extends number
> = number extends Left | Right
  ? number
  : Left extends 0
  ? Negate<Right>
  : Right extends 0
  ? Left
  : SubtractNumbers<Left, Right>;
