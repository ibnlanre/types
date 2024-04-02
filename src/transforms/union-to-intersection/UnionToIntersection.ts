import { Dictionary, Fn } from "@ibnlanre/types";

export type UnionToIntersection<Union extends unknown> = (
  Union extends any ? (k: Union) => void : never
) extends (k: infer Intersection extends Dictionary) => void
  ? Intersection
  : never;

export interface TUnionToIntersection<Union extends unknown | void = void>
  extends Fn<{
    0: Dictionary;
  }> {
  slot: [Union];
  data: UnionToIntersection<this[0]>;
}
