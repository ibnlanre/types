import { Count, IsNever, IsUnary } from "@ibnlanre/types";
import { Or } from "ts-arithmetic";

import { Collect } from "../collect";

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

type Elect<
  Left extends unknown[],
  Right extends unknown[]
> = Right extends (infer R extends unknown[])[]
  ? Or<IsNever<R>, IsUnary<Count<Left, void>>> extends 1
    ? Right
    : R
  : Right;

export type Select<Left extends unknown, Right extends unknown> = SelectHelper<
  Collect<Left>,
  Elect<Collect<Left>, Collect<Right>>
>;

type Test = Elect<[void, 2], [3, 4]>;
