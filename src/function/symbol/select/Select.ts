import type { Concat, Count, IsNever, IsUnary, IsVoid, Or } from "@ibnlanre/types";

import type { Collect } from "../collect";
import type { Devoid } from "../devoid";

type Last<Rest extends unknown[], Tail extends unknown> = [...Rest, Tail];
type First<Head extends unknown, Rest extends unknown[]> = [Head, ...Rest];

type SelectHelper<
  Left extends unknown[],
  Right extends unknown[],
  Result extends unknown[] = []
> = Left extends []
  ? Result
  : Left extends Last<infer LeftRest, infer LeftTail>
  ? Right extends Last<infer RightRest, infer RightTail>
    ? IsVoid<LeftTail> extends 1
      ? SelectHelper<LeftRest, RightRest, First<RightTail, Result>>
      : SelectHelper<LeftRest, Right, First<LeftTail, Result>>
    : Devoid<Concat<Left, Result>>
  : Result;

type Elect<
  Left extends unknown[],
  Right extends unknown[]
> = Right extends (infer Elements extends unknown[])[]
  ? Or<IsNever<Elements>, IsUnary<Count<Left, void>>> extends 1
    ? Right
    : Elements
  : Right;

export type Select<Left extends unknown, Right extends unknown> = SelectHelper<
  Collect<Left>,
  Devoid<Elect<Collect<Left>, Collect<Right>>>
>;
