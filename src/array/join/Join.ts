import { Fn, Stringify } from "@ibnlanre/types";

export type Join<
  List extends any[],
  Separator extends string = ""
> = List extends [infer Head, ...infer Rest]
  ? Rest extends []
    ? Head
    : `${Stringify<Head>}${Separator}${Join<Rest, Separator>}`
  : "";

export interface TJoin<
  Separator extends string | void = void,
  List extends unknown[] | void = void
> extends Fn<{
    0: string;
    1: unknown[];
  }> {
  slot: [Separator, List];
  data: Join<this[1], this[0]>;
}
