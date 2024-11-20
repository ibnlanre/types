import type { Fn, Join, UnionToTuple } from "@ibnlanre/types";

type Serializable = string | number | boolean | null;

type ArrayToString<Input extends any[]> = `[${Join<Input>}]`;

type ObjectToString<Input extends Record<string, any>> = Join<
  UnionToTuple<
    {
      [K in keyof Input]: `${Stringify<K>}: ${Stringify<Input[K]>}`;
    }[keyof Input]
  >,
  ", "
>;

export type Stringify<Input> = Input extends string
  ? Input
  : Input extends Serializable
  ? `${Input}`
  : Input extends any[]
  ? ArrayToString<Input>
  : Input extends Record<string, any>
  ? ObjectToString<Input>
  : never;

export interface TStringify<Input extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [Input];
  data: Stringify<this[0]>;
}
