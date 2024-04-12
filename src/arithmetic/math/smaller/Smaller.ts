import { LessThan } from "../less-than";

export type Smaller<Left extends number, Right extends number> = number extends
  | Left
  | Right
  ? number
  : Left extends Right
  ? Left
  : Right extends Left
  ? Right
  : LessThan<Left, Right> extends 1
  ? Left
  : Right;
