import {
  Map,
  Pipe,
  Pow,
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
  TSquareRoot,
  TStringify,
  TTake,
  TToEntries,
  TToFixed,
  TWith,
} from "@ibnlanre/types";
import { SquareRoot } from "src/number/math/square-root";

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
  //  ^? type Test2 = 7.87
  [1, 2, 3, 4],
  [
    TMap<
      TPipe<
        [
          TAdd<3>, // [4, 5, 6, 7]
          TStringify, // ["4", "5", "6", "7"]
          TPrepend<"1">, // ["14", "15", "16", "17"]
          TParseInt // [14, 15, 16, 17]
        ]
      >
    >,
    TAddition, // 62
    TSquareRoot, // 7.87400787401181
    TToFixed<2> // "7.87"
  ]
>;

type Test6 = Pow<2, 3>;

type Test3 = Map<TMultiply<3>, [1, 2, 3, 4]>;
//   ^? type Test3 = [3, 6, 9, 12]

type Test5 = Pipe<
  //   ^?
  {
    year: "2001";
    month: "01";
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

type Test = SquareRoot<62>;

// OtherThan
// InCase
// Suppose
