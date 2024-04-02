import { Fn } from "@ibnlanre/types";

export type Elements<List extends any[]> = List[number];

export interface TElements<List extends unknown[]>
  extends Fn<{
    0: unknown[];
  }> {
  slot: [List];
  data: Elements<this[0]>;
}
