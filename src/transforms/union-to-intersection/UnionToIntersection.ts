import type { Fn } from "@ibnlanre/types";

export type UnionToIntersection<Union> = (
  Union extends any ? (k: Union) => void : never
) extends (k: infer Intersection) => void
  ? Intersection
  : never;

export interface TUnionToIntersection<Union extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Union];
  data: UnionToIntersection<this[0]>;
}
