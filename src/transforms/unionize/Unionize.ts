import { Fn, Intersect, UnionToIntersection } from "@ibnlanre/types";

export type Unionize<Intersection> = Intersect<
  UnionToIntersection<Intersection>
>;

export interface TUnionize<Intersection extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Intersection];
  data: Unionize<this[0]>;
}
