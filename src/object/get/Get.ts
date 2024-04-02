import {
  ArbitraryKey,
  Dictionary,
  Fn,
  Keys,
  Paths,
  Stringify,
} from "@ibnlanre/types";

/**
 * Represents the value at a path in an object.
 *
 * @template ObjectType The type of the object.
 * @template Path The type of the path.
 * @template Delimiter The type of the delimiter.
 */
export type Get<
  ObjectType extends Dictionary,
  Path extends Paths<ObjectType, Delimiter> | ArbitraryKey<number>,
  Fallback extends unknown = never,
  Delimiter extends string = "."
> = Stringify<Path> extends Keys<ObjectType>
  ? ObjectType[Stringify<Path>]
  : Path extends `${infer Key}${Delimiter}${infer Rest}`
  ? ObjectType[Key] extends Dictionary
    ? Get<ObjectType[Key], Rest, Fallback>
    : Fallback
  : Fallback;

export interface TGet<
  Path extends
    | Paths<Exclude<ObjectType, void>, Exclude<Delimiter, void>>
    | ArbitraryKey<number>
    | void = void,
  Fallback extends unknown = never,
  Delimiter extends string | void = ".",
  ObjectType extends Dictionary | void = void
> extends Fn<{
    0:
      | Paths<Exclude<ObjectType, void>, Exclude<Delimiter, void>>
      | ArbitraryKey<number>;
    1: unknown;
    2: string;
    3: Dictionary;
  }> {
  slot: [Path, Fallback, Delimiter, ObjectType];
  data: Get<this[3], this[0], this[1], this[2]>;
}
