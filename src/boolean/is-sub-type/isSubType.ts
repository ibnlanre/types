import { Fn } from "@ibnlanre/types";

export type IsSubType<Left, Right> = Left extends Right ? 1 : 0;

export interface TIsSubType<
  Right extends unknown | void = void,
  Left extends unknown | void = void
> extends Fn<{
    0: unknown;
    1: unknown;
  }> {
  slot: [Right, Left];
  data: IsSubType<this[1], this[0]>;
}
