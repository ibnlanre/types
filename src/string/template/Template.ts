import { Fn, Serializable } from "@ibnlanre/types";

export type Template<T extends Serializable> = `${T}`;

export interface TTemplate<T extends Serializable>
  extends Fn<{
    0: Template<T>;
  }> {
  slot: [T];
  data: Template<this[0]>;
}
