import type { Add, Get, ParseInt, Stringify, Substring } from "@ibnlanre/types";

import type { DateFormat } from "./DateFormat";

export type BuddhistEraSymbols = "BB" | "BBBB";

export type BuddhistEra<
  In extends string,
  Out extends DateFormat,
  Year extends string = Get<Out, "year">,
  BuddhistYear extends number = Add<ParseInt<Year>, 543>
> = In extends "BB"
  ? Substring<Stringify<BuddhistYear>, 2, 4>
  : In extends "BBBB"
  ? Stringify<BuddhistYear>
  : never;
