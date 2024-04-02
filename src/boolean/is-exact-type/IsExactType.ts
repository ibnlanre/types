import { Fn } from "@ibnlanre/types";
import { And } from "ts-arithmetic";

type IsExactTypeHelper<Left, Right> = [Right] extends [Left] ? 1 : 0;

export type IsExactType<Left, Right> = And<
  IsExactTypeHelper<Left, Right>,
  IsExactTypeHelper<Right, Left>
>;

export interface TIsExactType<
  Left extends unknown | void = void,
  Right extends unknown | void = void
> extends Fn<{
    0: unknown;
    1: unknown;
  }> {
  slot: [Left, Right];
  data: IsExactType<this[0], this[1]>;
}
