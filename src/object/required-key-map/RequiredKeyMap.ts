import { Dictionary } from "@ibnlanre/types";

/**
 * Used in filtering out the required keys in a dictionary.
 *
 * @params ObjectType The type of the store.
 * @params Key The type of the key.
 *
 * @return The keys that are required in the dictionary.
 *
 * @example
 * { [Key in keyof ObjectType as RequiredKeyMap<ObjectType, Key>]: ObjectType[Key] }
 */
export type RequiredKeyMap<
  ObjectType extends Dictionary,
  Key extends keyof ObjectType
> = ObjectType[Key] extends Required<ObjectType>[Key] ? Key : never;
