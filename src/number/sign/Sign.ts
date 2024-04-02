import { Fn } from "@ibnlanre/types";

export type Sign<Number extends number> = `${Number}` extends `-${number}`
  ? -1
  : 1;

export interface TSign<Number extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Number];
  data: Sign<this[0]>;
}
