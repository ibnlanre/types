import type { Fn } from "@ibnlanre/types";

export type Prettify<ObjectType> = {
  [Key in keyof ObjectType]: ObjectType[Key];
} & {};

export interface TPrettify<ObjectType extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [ObjectType];
  data: Prettify<this[0]>;
}
