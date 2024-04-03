import { Apply, Fn, Inspect } from "@ibnlanre/types";
import { Bit, Or } from "ts-arithmetic";

export type UOr<
  Value extends Inspect<Right | Left>,
  Right extends Fn,
  Left extends Fn
> = Apply<Right, [Value]> extends infer R extends Bit
  ? Apply<Left, [Value]> extends infer L extends Bit
    ? Or<R, L>
    : 0
  : 0;

export interface TOr<
  Right extends Fn | void = void,
  Left extends Fn | void = void,
  Value extends Inspect<Exclude<Right | Left, void>> | void = void
> extends Fn<{
    0: Fn;
    1: Fn;
    2: Inspect<Exclude<Right | Left, void>>;
  }> {
  slot: [Right, Left, Value];
  data: UOr<this[2], this[0], this[1]>;
}
