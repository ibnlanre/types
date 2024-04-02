import { Fn } from "@ibnlanre/types";

export type Indices<List extends any[]> = Exclude<
  keyof List,
  keyof any[]
> extends `${infer R extends number}`
  ? R
  : never;

export interface TIndices<List extends unknown[] | void = void>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [List];
  data: Indices<this[0]>;
}
