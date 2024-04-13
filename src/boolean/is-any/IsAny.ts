import { Fn } from "@ibnlanre/types";

export type IsAny<Value extends unknown> = 0 extends 1 & Value ? 1 : 0;

export interface TIsAny<Value extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Value];
  data: IsAny<this[0]>;
}
