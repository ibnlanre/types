// import {
//   Pipe,
//   TIfNot,
//   TFromEntries,
//   TIncludes,
//   TMap,
//   TParseInt,
//   TPow,
//   TToEntries,
//   TWith,
// } from "@ibnlanre/types";

import {
  Map,
  Pipe,
  TAdd,
  TAddition,
  TFromEntries,
  TIfNot,
  TIncludes,
  TInvoke,
  TJoin,
  TMap,
  TMultiply,
  TParseInt,
  TPipe,
  TPrepend,
  TRange,
  TSliceTo,
  TStringify,
  TTake,
  TToEntries,
  TWith,
} from "@ibnlanre/types";

type Test1 = Pipe<
  // ^?
  7,
  [TRange<1>, TSliceTo<2>, TWith<0, "🔥">, TWith<1, "📜">, TJoin<" HotScript ">]
>;

type Test2 = Pipe<
  //  ^? type Test2 = 62
  [1, 2, 3, 4],
  [
    TMap<TAdd<3>>, // [4, 5, 6, 7]
    TMap<TStringify>, // ["4", "5", "6", "7"]
    TMap<TPrepend<"1">>, // ["14", "15", "16", "17"]
    TMap<TParseInt>, // [14, 15, 16, 17]
    TAddition // 62
  ]
>;

type Test3 = Map<TMultiply<3>, [1, 2, 3, 4]>;
//   ^? type Test3 = [3, 6, 9, 12]

type Test5 = Pipe<
  //   ^?
  {
    month: "01";
    year: "2001";
    day: "01";
  },
  [
    TToEntries, // ["year", "2001"]
    TMap<
      TPipe<
        [
          // [["year", 2001], ["year", "2001"], 1]
          TInvoke<[TWith<1, TParseInt>, TTake, TIncludes<"year">]>,
          // [true: ["year", 2001], false: ["year", "2001"], condition: 1]
          TIfNot<void, void>
        ]
      >
    >,
    TFromEntries // { year: "2001" }
  ]
>;

// OtherThan
// InCase
// Suppose
