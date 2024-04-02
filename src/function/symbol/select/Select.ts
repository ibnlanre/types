/**
 * @example
 *
 * type Test = Select<[void, 2, void], [6, 7]>;
 * //   ^? Result: [6, 2, 7]
 *
 * type Test = Select<[6, void, void], [7, 8]>;
 * //   ^? Result: [6, 7, 8]
 */
export type Select<
  Left extends unknown = [],
  Right extends unknown = [],
  Result extends unknown[] = []
> = Left extends unknown[]
  ? Right extends unknown[]
    ? Left extends []
      ? Result
      : Right extends []
      ? [...Left, ...Result]
      : Left extends [...infer Ls, infer Lv]
      ? Right extends [...infer Rs, infer Rv]
        ? [void] extends [Lv]
          ? [void] extends [Rv]
            ? Rs extends [...infer Rs, infer Rv]
              ? Select<Ls, Rs, [Rv, ...Result]>
              : Select<Ls, Rs, Result>
            : Select<Ls, Rs, [Rv, ...Result]>
          : Select<Ls, Right, [Lv, ...Result]>
        : Result
      : Result
    : never
  : never;
