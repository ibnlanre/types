import type { GreaterThan } from "../greater-than";

export type Bigger<Left extends number, Right extends number> = number extends
  | Left
  | Right
  ? number
  : Left extends Right
  ? Left
  : Right extends Left
  ? Right
  : GreaterThan<Left, Right> extends 1
  ? Left
  : Right;
