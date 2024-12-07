import type { Dictionary, Fn, Keys, Subtract } from "@ibnlanre/types";

type PathsHelper<
  ObjectType extends Dictionary,
  Key extends string | number,
  Delimiter extends string,
  Level extends number
> = Level extends 0
  ? `${Key}`
  : Level extends -1
  ? `${Key}` | `${Key}${Delimiter}${Paths<ObjectType, Delimiter>}`
  :
      | `${Key}`
      | `${Key}${Delimiter}${Paths<ObjectType, Delimiter, Subtract<Level, 1>>}`;

/**
 * Get all the possible paths of an object
 *
 * @param ObjectType - The object to get the paths from
 * @param [Delimiter = "."] - The delimiter to use to separate the keys
 * @param [Level = -1] - The level to stop the recursion
 */
export type Paths<
  ObjectType extends Dictionary,
  Delimiter extends string = ".",
  Level extends number = -1
> = ObjectType extends Dictionary
  ? {
      [Key in Keys<ObjectType>]: Key extends string | number
        ? ObjectType[Key] extends infer ObjectType
          ? ObjectType extends Dictionary
            ? PathsHelper<ObjectType, Key, Delimiter, Level>
            : `${Key}`
          : never
        : never;
    }[Keys<ObjectType>]
  : never;

export interface TPaths<
  Delimiter extends string | void = ".",
  Level extends number | void = -1,
  ObjectType extends Dictionary | void = void
> extends Fn<{
    0: string;
    1: number;
    2: Dictionary;
  }> {
  slot: [Delimiter, Level, ObjectType];
  data: Paths<this[2], this[0], this[1]>;
}
