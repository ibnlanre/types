import type { Fn } from "@ibnlanre/types";

export type Pop<List extends Type[], Type = unknown> = List extends [
  ...Type[],
  infer Element
]
  ? Element extends Type
    ? Element
    : never
  : never;

export interface TPop<List extends unknown[] | void = void>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [List];
  data: Pop<this[0]>;
}
