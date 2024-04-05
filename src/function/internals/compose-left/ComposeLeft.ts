import {
  Add,
  Apply,
  Fn,
  Inspect,
  TAdd,
  TFlat,
  TIsInteger,
  Widen,
} from "@ibnlanre/types";

type ComposeLeftHelper<
  Argument extends unknown,
  List extends Fn[],
  Position extends number = 0
> = List extends [infer Left extends Fn, ...infer Rest extends Fn[]]
  ? Argument extends Inspect<Left>
    ? ComposeLeftHelper<Apply<Left, [Argument]>, Rest, Add<Position, 1>>
    : {
        position: Position;
        scenario: Error;
        callback: Left;
        expected: Inspect<Left>;
        received: Widen<Argument>;
      }
  : never;

export type ComposeLeft<
  Argument extends unknown,
  List extends Fn[]
> = ComposeLeftHelper<Argument, List>;

type Test = ComposeLeft<2, [TAdd<4>, TIsInteger, TFlat]>;
