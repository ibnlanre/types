import { Fn, Get, Has, IsNever } from "@ibnlanre/types";

export type Array<
  List extends unknown[],
  Value extends unknown = never
> = IsNever<Value> extends 1
  ? List
  : List extends [infer Head, ...infer Rest]
  ? [Head] extends [Value]
    ? Array<Rest, Value> extends infer Rest
      ? Rest extends unknown[]
        ? [Head, ...Rest]
        : [Head, Rest]
      : never
    : Array<Rest, Value>
  : Value;

export interface TArray<
  Value extends unknown | void = unknown,
  List extends unknown[] | void = void
> extends Fn<{
    0: unknown;
    1: unknown[];
  }> {
  slot: [Value, List];
  data: Array<this[1], this[0]>;
}

export type Dictionary<
  ObjectType extends Record<PropertyKey, unknown>,
  Path extends unknown = never
> = IsNever<Path> extends 1
  ? ObjectType
  : Path extends PropertyKey
  ? Has<ObjectType, Path> extends 1
    ? Get<ObjectType, Exclude<Path, symbol>>
    : never
  : ObjectType;

export interface TDictionary<
  Path extends PropertyKey | void = void,
  ObjectType extends Record<PropertyKey, unknown> | void = void
> extends Fn<{
    0: PropertyKey;
    1: Record<PropertyKey, unknown>;
  }> {
  slot: [Path, ObjectType];
  data: Dictionary<this[1], this[0]>;
}

export type Take<
  From extends unknown,
  Value extends unknown = never
> = IsNever<Value> extends 1
  ? From
  : Value extends From
  ? Extract<From, Value>
  : Value;

export interface TTake<
  Value extends unknown | void = unknown,
  From extends unknown | void = void
> extends Fn<{
    0: unknown;
    1: unknown;
  }> {
  slot: [Value, From];
  data: Take<this[1], this[0]>;
}

export declare namespace Take {
  export { TArray, Array, TDictionary, Dictionary, TTake, Take };
}
