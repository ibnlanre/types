import { Dictionary } from "@ibnlanre/types";

/**
 * Used in filtering out the optional keys in a dictionary.
 *
 * @params ObjectType The type of the store.
 * @params Key The type of the key.
 *
 * @return The keys that are optional in the dictionary.
 *
 * @example
 * { [Key in keyof ObjectType as OptionalKeyMap<ObjectType, Key>]: ObjectType[Key] }
 */
export type OptionalKeyMap<
  ObjectType extends Dictionary,
  Key extends keyof ObjectType
> = ObjectType[Key] extends Required<ObjectType>[Key] ? never : Key;
