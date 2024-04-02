import { Fn } from "@ibnlanre/types";
import { Bit } from "ts-arithmetic";

export type IfNot<
  Condition extends Bit | boolean,
  Then,
  Else = never
> = Condition extends 0 | false ? Then : Else;

export interface TIfNot<
  Then extends unknown | void = void,
  Else extends unknown | void = void,
  Condition extends Bit | boolean | void = void
> extends Fn<{
    0: unknown;
    1: unknown;
    2: Bit | boolean;
  }> {
  slot: [Then, Else, Condition];
  data: IfNot<this[2], this[0], this[1]>;
}
