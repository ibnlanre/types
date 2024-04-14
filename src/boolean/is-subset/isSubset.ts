import { Fn } from "@ibnlanre/types";

export type IsSubset<Left, Right> = Left extends Right ? 1 : 0;

export interface TIsSubset<
  Right extends unknown | void = void,
  Left extends unknown | void = void
> extends Fn<{
    0: unknown;
    1: unknown;
  }> {
  slot: [Right, Left];
  data: IsSubset<this[1], this[0]>;
}
