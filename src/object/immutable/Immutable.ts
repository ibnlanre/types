import type { Dictionary, Fn } from "@ibnlanre/types";

// From https://github.com/RebeccaStevens/is-immutable-type/#making-readonlydeep-types-immutable
type ImmutableShallow<T> = { readonly [K in keyof T & {}]: T[K] };

type ImmutableObject<T> = { readonly [K in keyof T]: Immutable<T[K]> };
type ImmutableArray<T> = ImmutableShallow<ReadonlyArray<Immutable<T>>>;
type ImmutableMap<K, V> = Readonly<ReadonlyMap<Immutable<K>, Immutable<V>>>;
type ImmutableSet<T> = Readonly<ReadonlySet<Immutable<T>>>;

export type Immutable<T> = T extends Array<infer U>
  ? ImmutableArray<U>
  : T extends Map<infer K, infer V>
  ? ImmutableMap<K, V>
  : T extends Set<infer M>
  ? ImmutableSet<M>
  : T extends Dictionary
  ? ImmutableObject<T>
  : Readonly<T>;

export interface TImmutable<T extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [T];
  data: Immutable<this[0]>;
}
