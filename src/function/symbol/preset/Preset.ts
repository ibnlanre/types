import { Widen } from "@ibnlanre/types";

/**
 * Returns a tuple of widened types or void.
 *
 * @param Argument - The tuple to widen.
 * @returns A tuple of widened types or void.
 *
 * @example
 * ```ts
 * import { Preset } from "@ibnlanre/function";
 *
 * type Test = Preset<[1, "b"]>;
 * //   ^? [number | void, string | void]
 *
 * type Test2 = Preset<"a">;
 * //   ^? [string | void]
 * ```
 */
export type Preset<Argument extends unknown> = Argument extends unknown[]
  ? Argument extends [infer Head, ...infer Rest]
    ? [Widen<Head> | void, ...Preset<Rest>]
    : []
  : [Widen<Argument> | void];
