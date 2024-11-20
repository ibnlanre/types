import type { Fn, UnionToIntersection } from "@ibnlanre/types";

export type LastOfUnion<Union extends unknown> = UnionToIntersection<
  Union extends any ? () => Union : never
> extends () => infer Last
  ? Last
  : never;

export interface TLastOfUnion<Union extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Union];
  data: LastOfUnion<this[0]>;
}
