import { Fn } from "@ibnlanre/types";

export type Expand<List extends unknown[]> = List extends [
  infer Head,
  ...infer Tail
]
  ? Head extends unknown[]
    ? [Expand<Head>, ...Expand<Tail>]
    : [Head, ...Expand<Tail>]
  : [];

export interface TExpand<List extends unknown[] | void = void>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [List];
  data: Expand<this[0]>;
}
