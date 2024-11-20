import type { Fn } from "@ibnlanre/types";

export type FromEntries<EntryList extends any[][]> = {
  [Key in EntryList[number][0]]: Extract<EntryList[number], [Key, any]>[1];
};

export interface TFromEntries<EntryList extends unknown[][] | void = void>
  extends Fn<{
    0: unknown[][];
  }> {
  slot: [EntryList];
  data: FromEntries<this[0]>;
}
