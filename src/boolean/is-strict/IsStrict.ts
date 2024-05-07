import { Fn } from "@ibnlanre/types";

export type IsStrict = undefined extends null ? true : false;

export interface TIsStrict extends Fn<{}> {
  slot: [];
  data: IsStrict;
}
