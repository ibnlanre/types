import type { Fn } from "@ibnlanre/types";

export type IsSubtype<Left, Right> = Left extends Right ? 1 : 0;

export interface TIsSubtype<
  Right extends unknown | void = void,
  Left extends unknown | void = void
> extends Fn<{
    0: unknown;
    1: unknown;
  }> {
  slot: [Right, Left];
  data: IsSubtype<this[1], this[0]>;
}
