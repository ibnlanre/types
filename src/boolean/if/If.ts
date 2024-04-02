import { Fn } from "@ibnlanre/types";
import { Bit } from "ts-arithmetic";

export type If<
  Condition extends Bit | boolean,
  Then,
  Else = never
> = Condition extends 1 | true ? Then : Else;

export interface TIf<
  Then extends unknown | void = void,
  Else extends unknown | void = void,
  Condition extends Bit | boolean | void = void
> extends Fn<{
    0: unknown;
    1: unknown;
    2: Bit | boolean;
  }> {
  slot: [Then, Else, Condition];
  data: If<this[2], this[0], this[1]>;
}
