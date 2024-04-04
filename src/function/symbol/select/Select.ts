import { IsNever, IsUnary } from "@ibnlanre/types";
import { Add, Or } from "ts-arithmetic";

type SelectHelper<
  Left extends unknown[],
  Right extends unknown[],
  Result extends unknown[] = []
> = Left extends []
  ? Result
  : Right extends []
  ? [...Left, ...Result]
  : Left extends [...infer Ls, infer Lv]
  ? Right extends [...infer Rs, infer Rv]
    ? [void] extends [Lv]
      ? [void] extends [Rv]
        ? Rs extends [...infer Rs, infer Rv]
          ? SelectHelper<Ls, Rs, [Rv, ...Result]>
          : SelectHelper<Ls, Rs, Result>
        : SelectHelper<Ls, Rs, [Rv, ...Result]>
      : SelectHelper<Ls, Right, [Lv, ...Result]>
    : Result
  : Result;

type CountVoid<List extends unknown[]> = List extends []
  ? 0
  : List extends [infer Head, ...infer Rest]
  ? [Head] extends [void]
    ? Add<1, CountVoid<Rest>>
    : CountVoid<Rest>
  : 0;

type Elect<
  Left extends unknown[],
  Right extends unknown[]
> = Right extends (infer R extends unknown[])[]
  ? Or<IsNever<R>, IsUnary<CountVoid<Left>>> extends 1
    ? Right
    : R
  : Right;

type Block<List> = List extends unknown[] ? List : [List];

export type Select<Left extends unknown, Right extends unknown> = SelectHelper<
  Block<Left>,
  Elect<Block<Left>, Block<Right>>
>;
