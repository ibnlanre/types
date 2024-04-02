import {
  Map,
  Pipe,
  TAdd,
  TAddition,
  TAppend,
  TJoin,
  TMap,
  TMultiply,
  TParseInt,
  TPrepend,
  TRange,
  TSliceTo,
  TStringify,
  TSubtraction,
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

type Test4 = Pipe<
  //  ^? type Test4 = -223
  [1, 2, 3, 4, 5],
  [
    TMap<TAdd<3>>, // [4, 5, 6, 7, 8]
    TMap<TStringify>, // ["4", "5", "6", "7", "8"]
    TMap<TAppend<"1">>, // ["41", "51", "61", "71", "81"]
    TMap<TParseInt>, // [14, 15, 16, 17, 18]
    TSubtraction // -223
  ]
>;
