import type { LessThan } from "../less-than";
import type { Mod } from "../mod";
import type { Subtract } from "../subtract";
import type { Subtraction } from "../subtraction";

export type Floor<Value extends number> = Value extends 0
  ? 0
  : Value extends number
  ? LessThan<Value, 0> extends 1
    ? Subtraction<[Value, Mod<Value, -1>, 1]>
    : Mod<Value, 1> extends 0
    ? Value
    : Subtract<Value, Mod<Value, 1>>
  : never;
