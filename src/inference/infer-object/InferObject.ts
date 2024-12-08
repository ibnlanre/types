import type { Fn } from "@ibnlanre/types";

export type InferObject<Value extends Record<PropertyKey, unknown>> =
  Value extends Record<PropertyKey, unknown> ? Value : never;

export interface TInferObject<
  Value extends Record<PropertyKey, unknown> | void = void
> extends Fn<{
    0: Record<PropertyKey, unknown>;
  }> {
  slot: [Value];
  data: InferObject<this[0]>;
}
