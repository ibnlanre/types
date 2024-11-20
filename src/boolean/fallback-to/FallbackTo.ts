import type { Fn, RequireValue } from "@ibnlanre/types";

export type FallbackTo<
  ActualValue,
  FallbackValue,
  PreventableValue = undefined
> = [PreventableValue] extends [ActualValue]
  ? FallbackValue
  : RequireValue<ActualValue>;

export interface TFallbackTo<
  FallbackValue extends unknown | void = void,
  PreventableValue extends unknown | undefined = undefined,
  ActualValue extends unknown | void = void
> extends Fn<{
    0: unknown;
    1: unknown | undefined;
    2: unknown;
  }> {
  slot: [FallbackValue, PreventableValue, ActualValue];
  data: FallbackTo<this[2], this[0], this[1]>;
}
