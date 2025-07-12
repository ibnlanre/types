export type Maps<K = unknown, V = unknown> =
  | Map<K, V>
  | WeakMap<WeakKey, V>
  | ReadonlyMap<K, V>;
