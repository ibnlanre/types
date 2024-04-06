import { Fn } from "@ibnlanre/types";

export type Sign<Value extends number> = `${Value}` extends `-${number}`
  ? -1
  : 1;

export interface TSign<Value extends number | void = void>
  extends Fn<{
    0: number;
  }> {
  slot: [Value];
  data: Sign<this[0]>;
}
