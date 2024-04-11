import { Serializable } from "@ibnlanre/types";

export type Join<
  List extends Serializable[],
  Delimiter extends string = ""
> = List extends [
  infer Head extends Serializable,
  ...infer Rest extends Serializable[]
]
  ? Join<Rest, `${Delimiter}${Head}`>
  : Delimiter;
