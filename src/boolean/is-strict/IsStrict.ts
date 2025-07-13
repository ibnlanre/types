import type { Fn } from "@ibnlanre/types";

export type IsStrict = undefined extends null ? 1 : 0;

export interface TIsStrict extends Fn {
  slot: [];
  data: IsStrict;
}
