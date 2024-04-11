import { Fn } from "@ibnlanre/types";

export type Zip<
  Left extends unknown[],
  Right extends unknown[]
> = Left extends [infer HeadA, ...infer RestA]
  ? Right extends [infer HeadB, ...infer RestB]
    ? [[HeadA, HeadB], ...Zip<RestA, RestB>]
    : []
  : [];

export interface TZip<
  Left extends unknown[] | void = void,
  Right extends unknown[] | void = void
> extends Fn<{
    0: unknown[];
    1: unknown[];
  }> {
  slot: [Left, Right];
  data: Zip<this[0], this[1]>;
}
