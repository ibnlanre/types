import type { Fn } from "@ibnlanre/types";

export type IsExact<Left, Right> = (<T>() => T extends Left ? 1 : 0) extends <
  T
>() => T extends Right ? 1 : 0
  ? 1
  : 0;

export interface TIsExact<
  Left extends unknown | void = void,
  Right extends unknown | void = void
> extends Fn<{
    0: unknown;
    1: unknown;
  }> {
  slot: [Left, Right];
  data: IsExact<this[0], this[1]>;
}
