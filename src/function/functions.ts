import {
  Includes,
  Map,
  Pipe,
  TAdd,
  TAddition,
  TAppend,
  TExcept,
  TFromEntries,
  TIncludes,
  TJoin,
  TMap,
  TMultiply,
  TOr,
  TParseInt,
  TPrepend,
  TRange,
  TSliceTo,
  TStringify,
  TSubtraction,
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
      TExcept<
        TIncludes<"year">, // [["month", "01"], ["day", "01"]]
        TWith<1, TParseInt> // [["year", "2001"], ["month", 1], ["day", 1]]
      >
    >,
    TFromEntries // { year: "2001", month: 1, day: 1 }
  ]
>;
