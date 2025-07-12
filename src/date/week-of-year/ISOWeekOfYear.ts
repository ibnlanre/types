import type {
  Add,
  Ceil,
  Divide,
  InferNumber,
  Modulo,
  ParseInt,
  Subtract,
} from "@ibnlanre/types";
import type { ISODayOfWeek } from "../day-of-week";
import type { DayOfYear } from "../day-of-year";
import type { IsLeapYear } from "../leap-year";

// type ISOWeekOfYearHelper<
//   Year extends string,
//   Month extends string,
//   Day extends string
// > = ISOFirstWeek<Year> extends InferNumber<infer FirstWeek>
//   ? DayOfYear<
//       ParseInt<Year>,
//       ParseInt<Month>,
//       ParseInt<Day>
//     > extends InferNumber<infer DayOfTheYear>
//     ? Add<GregorianDayOfWeek<Year, Month, Day>, 5> extends InferNumber<
//         infer GregorianDayOfTheWeek
//       >
//       ? Floor<
//           Divide<
//             Add<
//               DayOfTheYear,
//               FirstWeek extends 0 ? 6 : Subtract<GregorianDayOfTheWeek, 1>
//             >,
//             7
//           >
//         >
//       : never
//     : never
//   : never;

type ISOFirstWeek<Year extends string> = ISODayOfWeek<
  Year,
  "01",
  "01"
> extends InferNumber<infer StartDay>
  ? StartDay extends 1 | 2 | 3 | 4
    ? 0
    : 1
  : never;

type GetDayOfYear<
  Year extends string,
  Month extends string,
  Day extends string
> = DayOfYear<ParseInt<Year>, ParseInt<Month>, ParseInt<Day>>;

type AdjustedDayOfYear<
  Year extends string,
  Month extends string,
  Day extends string
> = ISODayOfWeek<Year, Month, Day> extends InferNumber<infer StartDay>
  ? Subtract<
      Add<GetDayOfYear<Year, Month, Day>, Modulo<7, StartDay, "Euclidean">>,
      ISOFirstWeek<Year>
    > extends InferNumber<infer AdjustedDayOfTheYear>
    ? Subtract<AdjustedDayOfTheYear, ISOFirstWeek<Year>>
    : never
  : never;

type FirstWeekTest = ISOFirstWeek<"2021">; // Should be 1 (first week starts on Monday)
type DayOfWeekTest = ISODayOfWeek<"2021", "01", "01">; // Should be 5 (Friday)
type DayOfYearTest = GetDayOfYear<"2021", "01", "01">; // Should be 1
type DayTest = AdjustedDayOfYear<"2021", "01", "01">; // Should be 1
type WeekTest = ISOWeekOfYear<"2021", "01", "01">; // Should be 6 (Saturday)
type ModuloTest = Modulo<7, DayOfWeekTest, "Floored">; // Should be 1

type ISOWeekOfYearHelper<
  Year extends string,
  Month extends string,
  Day extends string
> = AdjustedDayOfYear<Year, Month, Day> extends InferNumber<
  infer AdjustedDayOfTheYear
>
  ? Ceil<Divide<AdjustedDayOfTheYear, 7>>
  : never;

export type ISOWeekOfYear<
  Year extends string,
  Month extends string,
  Day extends string
> = ISOWeekOfYearHelper<Year, Month, Day> extends InferNumber<
  infer WeekOfTheYear
>
  ? WeekOfTheYear extends 0
    ? IsLeapYear<Subtract<ParseInt<Year>, 1>> extends 1
      ? 53
      : 52
    : WeekOfTheYear
  : never;
