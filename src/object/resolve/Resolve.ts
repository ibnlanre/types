import {
  ArbitraryKey,
  Combine,
  Dictionary,
  Fn,
  Get,
  Paths,
} from "@ibnlanre/types";

export type Resolve<
  Source extends Dictionary[] | Dictionary,
  Path extends
    | Paths<Source extends Dictionary[] ? Combine<Source> : Source, Delimiter>
    | ArbitraryKey<number>,
  Delimiter extends string = "."
> = Get<
  Source extends Dictionary[] ? Combine<Source> : Source,
  Path,
  never,
  Delimiter
>;

export interface TResolve<
  Path extends
    | Paths<
        Source extends Dictionary[]
          ? Combine<Exclude<Source, void>>
          : Exclude<Source, void>,
        Delimiter
      >
    | ArbitraryKey<number>
    | void = void,
  Delimiter extends string = ".",
  Source extends Dictionary[] | Dictionary | void = void
> extends Fn<{
    0:
      | Paths<
          Source extends Dictionary[]
            ? Combine<Exclude<Source, void>>
            : Exclude<Source, void>,
          Delimiter
        >
      | ArbitraryKey<number>;
    1: string;
    2: Dictionary[] | Dictionary;
  }> {
  slot: [Path, Delimiter, Source];
  data: Resolve<this[2], this[0], this[1]>;
}
