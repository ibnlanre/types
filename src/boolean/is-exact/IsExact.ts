import { Fn, And } from "@ibnlanre/types";

type IsExactHelper<Left, Right> = [Right] extends [Left] ? 1 : 0;

export type IsExact<Left, Right> = And<
  IsExactHelper<Left, Right>,
  IsExactHelper<Right, Left>
>;

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
