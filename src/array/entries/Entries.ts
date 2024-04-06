import { Fn, ParseInt, UnionToTuple } from "@ibnlanre/types";

export type Entries<List extends unknown[]> = UnionToTuple<
  {
    [Key in Exclude<keyof List, keyof any[]>]: [ParseInt<Key>, List[Key]];
  }[Exclude<keyof List, keyof any[]>]
> extends infer Result extends unknown[][]
  ? Result
  : never;

export interface TEntries<List extends unknown[]>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [List];
  data: Entries<this[0]>;
}
