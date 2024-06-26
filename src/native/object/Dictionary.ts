export type Dictionary<
  Key extends PropertyKey = string,
  Type extends unknown = unknown
> = Record<Key, Type>;
