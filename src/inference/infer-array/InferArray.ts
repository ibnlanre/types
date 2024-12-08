import type { Fn } from "@ibnlanre/types";

export type InferArray<
  Value extends unknown[],
  Type extends unknown = Value extends (infer U)[] ? U : never
> = Value extends Type[] ? Type[] : never;

export interface TInferArray<
  Type extends unknown | void = void,
  Value extends Type[] | void = void
> extends Fn<{
    0: Type;
    1: Type[];
  }> {
  slot: [Type, Value];
  data: InferArray<this[1], this[0]>;
}
