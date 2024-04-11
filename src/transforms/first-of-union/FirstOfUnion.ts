import { Fn, UnionToIntersection } from "@ibnlanre/types";

type FirstOfUnionHelper<
  Union extends unknown,
  Result = keyof Union
> = UnionToIntersection<
  Union extends any ? () => Union : never
> extends () => infer First
  ? FirstOfUnionHelper<Exclude<Union, First>, First>
  : Result;

export type FirstOfUnion<Union extends unknown> = FirstOfUnionHelper<Union>;

export interface TFirstOfUnion<Union extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Union];
  data: FirstOfUnion<this[0]>;
}
