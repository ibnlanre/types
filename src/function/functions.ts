import {
  Inspect,
  Pipe,
  TBesides,
  TFromEntries,
  TIncludes,
  TMap,
  TParseInt,
  TPow,
  TToEntries,
  TWith,
} from "@ibnlanre/types";

type Test5 = Pipe<
  {
    year: "2001";
    month: "01";
    day: "01";
  },
  [
    TToEntries, // [["year", "2001"], ["month", "01"], ["day", "01"]]
    TMap<
      TBesides<
        TIncludes<"year">, // [["month", "01"], ["day", "01"]]
        TWith<1, TParseInt> // [["year", "2001"], ["month", 1], ["day", 1]]
      >
    >,
    TFromEntries // { year: "2001", month: 1, day: 1 }
  ]
>;
