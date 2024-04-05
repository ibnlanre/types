// import {
//   Inspect,
//   Pipe,
//   TBesides,
//   TFromEntries,
//   TIncludes,
//   TMap,
//   TParseInt,
//   TPow,
//   TToEntries,
//   TWith,
// } from "@ibnlanre/types";

// type Test5 = Pipe<
//   {
//     year: "2001";
//     month: "01";
//     day: "01";
//   },
//   [
//     TToEntries, // [["year", "2001"], ["month", "01"], ["day", "01"]]
//     TMap<
//       TBesides<
//         TIncludes<"year">, // [["month", "01"], ["day", "01"]]
//         TWith<1, TParseInt> // [["year", "2001"], ["month", 1], ["day", 1]]
//       >
//     >,
//     TFromEntries // { year: "2001", month: 1, day: 1 }
//   ]
// >;

import {
  Map,
  Pipe,
  TAdd,
  TAddition,
  TBesides,
  TFromEntries,
  TIncludes,
  TIsInteger,
  TJoin,
  TMap,
  TMultiply,
  TParseInt,
  TPrepend,
  TRange,
  TSliceTo,
  TStringify,
  TToEntries,
  TWith,
} from "@ibnlanre/types";

type Test1 = Pipe<
  // ^? type Test1 = "🔥 HotScript 📜"
  7,
  [
    TRange<1>, // [1, 2, 3, 4, 5, 6, 7]
    TSliceTo<2>, // [1, 2]
    TWith<0, "🔥">, // ["🔥", 2]
    TWith<1, "📜">, // ["🔥", "📜"]
    TJoin<" HotScript "> // "🔥 HotScript 📜"
  ]
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
  {
    year: "2001";
    month: "01";
    day: "01";
  },
  [
    TToEntries,
    TMap<TBesides<TIncludes<"year">, TWith<1, TParseInt>>>,
    TFromEntries,
    TIncludes<1> // true
  ]
>;
