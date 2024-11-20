import type { Fn, Join, Serializable } from "@ibnlanre/types";

export type Template<Stream extends Serializable | Serializable[]> =
  Stream extends Serializable
    ? `${Stream}`
    : Stream extends Serializable[]
    ? Join<Stream>
    : never;

export interface TTemplate<Stream extends Serializable>
  extends Fn<{
    0: Template<Stream>;
  }> {
  slot: [Stream];
  data: Template<this[0]>;
}
