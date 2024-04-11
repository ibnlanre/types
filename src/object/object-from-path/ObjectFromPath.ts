import { Fn } from "@ibnlanre/types";

export type ObjectFromPath<
  Path extends string,
  Value extends any,
  Delimiter extends string = "."
> = Path extends `${infer Head}${Delimiter}${infer Rest}`
  ? { [K in Head]: ObjectFromPath<Rest, Value> }
  : { [K in Path]: Value };

export interface TObjectFromPath<
  Value extends unknown = void,
  Delimiter extends string | void = ".",
  Path extends string | void = void
> extends Fn<{
    0: string;
    1: unknown;
    2: string;
  }> {
  slot: [Value, Delimiter, Path];
  data: ObjectFromPath<this[2], this[0], this[1]>;
}
