import { IsVoid } from "@ibnlanre/types";

type DevoidHelper<
  List extends unknown[],
  Result extends unknown[] = []
> = List extends []
  ? Result
  : List extends [infer Head, ...infer Rest]
  ? IsVoid<Head> extends 1
    ? DevoidHelper<Rest, Result>
    : DevoidHelper<Rest, [...Result, Head]>
  : Result;

export type Devoid<List extends unknown[]> = DevoidHelper<List>;
