type PropertyKey = string | number | symbol;

export type Dictionary<
  Key extends PropertyKey = string,
  Type extends unknown = unknown
> = Record<Key, Type>;
