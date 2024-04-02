import { Dictionary, Fn } from "@ibnlanre/types";

type DefaultWidenOptions = {
  flattenArrays: true;
  widenReturnType: true;
};

type Flatten<Value extends any[]> = Value extends (infer X)[]
  ? Widen<X>[]
  : Value;

export type Widen<
  Value,
  Options extends {
    flattenArrays?: boolean;
    widenReturnType?: boolean;
  } = DefaultWidenOptions
> = Value extends string
  ? string
  : Value extends number
  ? number
  : Value extends bigint
  ? bigint
  : Value extends boolean
  ? boolean
  : Value extends any[]
  ? [Options["flattenArrays"]] extends [true]
    ? Flatten<Value>
    : Value extends [infer Head, ...infer Rest]
    ? [Widen<Head>, ...Widen<Rest>]
    : Value
  : Value extends Dictionary
  ? {
      [K in keyof Value]: Widen<Value[K]>;
    }
  : Value extends (...args: any[]) => any
  ? [Options["widenReturnType"]] extends [true]
    ? (...args: Parameters<Value>) => Widen<ReturnType<Value>>
    : Value
  : Value;

export interface TWiden<
  Options extends {
    flattenArrays?: boolean;
    widenReturnType?: boolean;
  } | void = DefaultWidenOptions,
  Value extends unknown | void = void
> extends Fn<{
    0: {
      flattenArrays?: boolean;
      widenReturnType?: boolean;
    };
    1: unknown;
  }> {
  slot: [Options, Value];
  data: Widen<this[1], this[0]>;
}
