import { Fn } from "@ibnlanre/types";

export type IsSuperType<Left, Right> = Right extends Left ? 1 : 0;

export interface TIsSuperType<
  Right extends unknown | void = void,
  Left extends unknown | void = void
> extends Fn<{
    0: unknown;
    1: unknown;
  }> {
  slot: [Right, Left];
  data: IsSuperType<this[1], this[0]>;
}
