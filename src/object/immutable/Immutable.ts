import type {
  Derivatives,
  Fn,
  GenericObject,
  Maps,
  Primitives,
  Sets,
} from "@ibnlanre/types";

/**
 * While the argument exists, that an immutable type should have immutable
 * properties, I believe that it is not the best approach to take. Developer
 * experience is paramount, and making properties deeply immutable may not
 * be the required behavior in all cases.
 *
 * Therefore, this type only makes the top-level properties immutable.
 * You can read more about the topic of immutability in TypeScript here:
 *
 * Rebecca Stevens' {@link https://github.com/RebeccaStevens/is-immutable-type/#making-readonlydeep-types-immutable IsImmutableType}
 */
export type Immutable<Argument> = Argument extends Primitives | Derivatives
  ? Argument
  : Argument extends Maps<infer K, infer V>
  ? ReadonlyMap<K, V>
  : Argument extends Sets<infer M>
  ? ReadonlySet<M>
  : Argument extends GenericObject
  ? { readonly [K in keyof Argument]: Immutable<Argument[K]> }
  : Argument;

export interface TImmutable<T extends unknown | void = void>
  extends Fn<{
    0: unknown;
  }> {
  slot: [T];
  data: Immutable<this[0]>;
}
