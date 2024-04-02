import { Dictionary, Fn, Merge } from "@ibnlanre/types";

type CombineHelper<
  Source extends Dictionary[],
  Result extends Dictionary = {}
> = Source extends [
  infer Head extends Dictionary,
  ...infer Rest extends Dictionary[]
]
  ? CombineHelper<Rest, Merge<Result, Head>>
  : Source extends Dictionary
  ? Merge<Result, Source>
  : Result;

export type Combine<Source extends Dictionary[]> = CombineHelper<Source>;

export interface TCombine<Source extends Dictionary[] | void = void>
  extends Fn<{
    0: Dictionary[];
  }> {
  slot: [Source];
  data: Combine<this[0]>;
}
