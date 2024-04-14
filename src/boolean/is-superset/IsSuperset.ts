import { Fn } from "@ibnlanre/types";

export type IsSuperset<Left, Right> = Right extends Left ? 1 : 0;

export interface TIsSuperset<
  Right extends unknown | void = void,
  Left extends unknown | void = void
> extends Fn<{
    0: unknown;
    1: unknown;
  }> {
  slot: [Right, Left];
  data: IsSuperset<this[1], this[0]>;
}
