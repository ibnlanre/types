import { Dictionary, Fn } from "@ibnlanre/types";
import { IsInt } from "ts-arithmetic";

export type IsInteger<Value extends unknown> = Value extends number
  ? IsInt<Value>
  : 0;

export interface TIsInteger<Value extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Value];
  data: IsInteger<this[0]>;
}

export type IsString<Value extends unknown> = Value extends string ? 1 : 0;

export interface TIsString<Value extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Value];
  data: IsString<this[0]>;
}

export type IsArray<Value extends unknown> = Value extends unknown[] ? 1 : 0;

export interface TIsArray<Value extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Value];
  data: IsArray<this[0]>;
}

export type IsObject<Value extends unknown> = Value extends Dictionary ? 1 : 0;

export interface TIsObject<Value extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Value];
  data: IsObject<this[0]>;
}
