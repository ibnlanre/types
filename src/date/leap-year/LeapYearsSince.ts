import type {
  Values,
  GreaterThan,
  Range,
  InferArray,
  InferNumber,
  InferObject,
  Size,
  Dictionary,
  UnionToTuple,
} from "@ibnlanre/types";
import type { IsLeapYear } from "./IsLeapYear";

type LeapYearCounter<List extends number[]> = {
  [Key in keyof List as Exclude<
    Key,
    keyof unknown[]
  > extends infer Index extends keyof List
    ? List[Index] extends InferNumber<infer Element>
      ? IsLeapYear<Element> extends 1
        ? Index
        : never
      : never
    : never]: List[Key];
};
// extends InferObject<infer Result>
//   ? UnionToArray<keyof Result> extends InferArray<infer List>
//     ? Size<List>
//     : never
//   : never;

type LeapYearsSinceHelper<Year extends number, Period extends number> = Range<
  Period,
  Year
> extends InferArray<infer List, number>
  ? LeapYearCounter<List>
  : never;

export type LeapYearsSince<
  Year extends number,
  Period extends number = 1970
> = GreaterThan<Year, Period> extends 1
  ? LeapYearsSinceHelper<Year, Period> extends infer Result
    ? Result extends Dictionary
      ? UnionToArray<keyof Result> extends InferArray<infer List>
        ? Size<List>
        : never
      : never
    : never
  : 0;

type Test1 = LeapYearsSince<9012>;

type Splat<Mapping extends Dictionary> = Values<Mapping> extends InferArray<
  infer List,
  number
>
  ? Size<List>
  : never;

type DictionaryToArray<Mapping extends Dictionary, E extends number[] = []> = {
  [Key in keyof Mapping as number]: Mapping[Key] extends number
    ? [...E, Mapping[Key]]
    : never;
};

type EnumerateHelper<
  Start extends number,
  End extends number,
  Result extends number[] = [],
  Next extends number = Add<Start, 1>
> = Start extends End
  ? Result
  : EnumerateHelper<Next, End, Push<Result, Start>>;

type Enumerate<
  Start extends number,
  End extends number,
  Result extends number[] = [],
  Limit extends number = Subtract<End, Start>,
  Increment extends number = Min<Limit, 9>,
  Next extends number = Add<Start, Increment>,
  LastRow extends number[] = EnumerateHelper<Start, Next>
> = Start extends End ? Result : Enumerate<Next, End, Concat<Result, LastRow>>;

type GenerateChunks<
  Start extends number,
  End extends number,
  Difference extends number = Subtract<End, Start>,
  Width extends number = Length<Difference>,
  ChunkSize extends number = Ceil<Divide<Difference, Width>>,
  List extends unknown[] = EnumerateHelper<0, Width>
> = {
  [Index in keyof List]: List[Index] extends number
    ? Multiply<ChunkSize, List[Index]> extends InferNumber<infer Increment>
      ? ChunkComponent<
          Start,
          End,
          Increment,
          ChunkSize
        > extends InferChunkParts<infer Head, infer Tail>
        ? Enumerate<Head, Tail>
        : never
      : never
    : never;
  };

  type Test6 = 

type Test2 = DictionaryToArray<{ "1": 1; "2": 2; "3": 3 }>;
type Test3 = DictionaryToArray<{
  2: 1972;
  6: 1976;
  10: 1980;
  14: 1984;
  18: 1988;
  22: 1992;
  26: 1996;
  30: 2000;
  34: 2004;
  38: 2008;
}>;

type Test4 = UnionToTuple<
  keyof {
    2: 1972;
    6: 1976;
    10: 1980;
    14: 1984;
    18: 1988;
    22: 1992;
    26: 1996;
    30: 2000;
    34: 2004;
    38: 2008;
  }
>;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

type UnionToOvlds<U> = UnionToIntersection<
  U extends any ? (f: U) => void : never
>;

type PopUnion<U> = UnionToOvlds<U> extends (a: infer A) => void ? A : never;

type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;

type UnionToArray<T, A extends unknown[] = []> = IsUnion<T> extends true
  ? UnionToArray<Exclude<T, PopUnion<T>>, [PopUnion<T>, ...A]>
  : [T, ...A];

type Test5 = UnionToArray<1 | 2 | 3 | 4>;
