import { Dictionary, Fn } from "@ibnlanre/types";

export type Keys<ObjectType extends Dictionary> =
  keyof ObjectType extends undefined
    ? never
    : keyof ObjectType extends infer Keys extends string | number
    ? `${Keys}`
    : never;

export interface TKeys<ObjectType extends Dictionary | void = void> extends Fn {
  slot: [ObjectType];
  data: Keys<this[0]>;
}
