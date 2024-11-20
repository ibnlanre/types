import type { Fn, Indices } from "@ibnlanre/types";

export type Reduce<List extends unknown[]> = {
  [K in Indices<List>]: List[K];
};

export interface TReduce<List extends unknown[] | void = void>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [List];
  data: Reduce<this[0]>;
}
