import { describe, expectTypeOf, test } from "vitest";
import type { FormatDate } from "./FormatDate";

// Contract:
// - Input: ISO-like date string "YYYY-MM-DDTHH:mm:ss.SSSZ" (with timezone as "+HH:MM" or "-HH:MM")
// - Format: combination of Localized, Simple, Advanced, and Buddhist Era tokens
// - Output: string literal with tokens replaced, non-token letters preserved

describe("FormatDate", () => {
  test("returns error for invalid date string", () => {
    type R = FormatDate<"not-a-date">;
    expectTypeOf<R>().toEqualTypeOf<"'not-' does not match any date component.">();
  });

  test("supports simple tokens (YYYY, MM, DD, HH, mm, ss, SSS, Z)", () => {
    type R = FormatDate<
      "2024-07-14T16:05:09.123+05:30",
      "YYYY-MM-DD HH:mm:ss.SSS Z"
    >;
    // YYYY=2024, MM=07, DD=14, HH=16, mm=05, ss=09, SSS=123, Z=+05:30
    expectTypeOf<R>().toEqualTypeOf<"2024-07-14 16:05:09.123 +05:30">();
  });

  test("supports month/day without padding and ordinals (M, D, Mo)", () => {
    type R1 = FormatDate<"2024-07-03T08:00:00.000+00:00", "M/D">;
    expectTypeOf<R1>().toEqualTypeOf<"7/3">();

    type R2 = FormatDate<"2024-07-03T08:00:00.000+00:00", "Mo">;
    // July is month 07 -> ordinal 7th
    expectTypeOf<R2>().toEqualTypeOf<"7th">();
  });

  test("supports day and month names (ddd, MMMM)", () => {
    type R = FormatDate<"2024-07-14T12:00:00.000+00:00", "ddd, MMMM D">;
    // 2024-07-14 is a Sunday
    expectTypeOf<R>().toEqualTypeOf<"Sun, July 14">();
  });

  test("supports 12-hour clock and AM/PM (h, hh, a, A)", () => {
    type R1 = FormatDate<"2024-07-14T16:05:00.000+00:00", "h A">; // 16 -> 4 PM
    expectTypeOf<R1>().toEqualTypeOf<"4 PM">();

    type R2 = FormatDate<"2024-07-14T09:05:00.000+00:00", "hh a">; // 09 -> 09 am
    expectTypeOf<R2>().toEqualTypeOf<"09 am">();
  });

  test("handles Buddhist Era (BB, BBBB)", () => {
    type R1 = FormatDate<"2024-01-01T00:00:00.000+00:00", "BB">; // 2024 + 543 = 2567 -> last 2 = 67
    expectTypeOf<R1>().toEqualTypeOf<"67">();

    type R2 = FormatDate<"2024-01-01T00:00:00.000+00:00", "BBBB">; // full BE year 2567
    expectTypeOf<R2>().toEqualTypeOf<"2567">();
  });

  test("supports localized formats (LT, LTS, L, LL, LLL, LLLL, l, ll, lll, llll)", () => {
    type LT = "h:mm A";
    type l = "M/D/YYYY";
    type llll = "ddd, MMM D, YYYY h:mm A";

    type R = FormatDate<"2024-07-14T16:05:09.000+00:00", "LT">;
    expectTypeOf<R>().toEqualTypeOf<
      FormatDate<"2024-07-14T16:05:09.000+00:00", LT>
    >();

    type Rl = FormatDate<"2024-07-14T16:05:09.000+00:00", "l">;
    expectTypeOf<Rl>().toEqualTypeOf<
      FormatDate<"2024-07-14T16:05:09.000+00:00", l>
    >();

    type R2 = FormatDate<"2024-07-14T16:05:09.000+00:00", "llll">;
    expectTypeOf<R2>().toEqualTypeOf<
      FormatDate<"2024-07-14T16:05:09.000+00:00", llll>
    >();
  });

  test("supports advanced tokens (Q, Do, DDD, k, kk, X, x, w, ww, W, WW, gggg, GGGG, z, zz)", () => {
    type Base = "2024-01-02T03:04:05.006+05:30"; // Wed Jan 2, 2024 (ISO week may differ)

    type Q = FormatDate<Base, "Q">; // Quarter
    expectTypeOf<Q>().toEqualTypeOf<"1">();

    type Do = FormatDate<Base, "Do">; // Ordinal day
    expectTypeOf<Do>().toEqualTypeOf<"2nd">();

    type DDD = FormatDate<Base, "DDD">; // Day of year (trimmed)
    expectTypeOf<DDD>().toEqualTypeOf<"2">();

    type k = FormatDate<Base, "k">; // Hour of day (1-24)
    expectTypeOf<k>().toEqualTypeOf<"3">();

    type kk = FormatDate<Base, "kk">; // Padded hour of day
    expectTypeOf<kk>().toEqualTypeOf<"03">();

    type gggg = FormatDate<Base, "gggg">; // Week-year (gregorian)
    expectTypeOf<gggg>().toEqualTypeOf<"2024">();

    type GGGG = FormatDate<Base, "GGGG">; // Week-year (ISO)
    expectTypeOf<GGGG>().toEqualTypeOf<"2024">();

    type z = FormatDate<Base, "z">; // Timezone abbr
    expectTypeOf<z>().toEqualTypeOf<"IST">();

    type zz = FormatDate<Base, "zz">; // Timezone name
    expectTypeOf<zz>().toEqualTypeOf<"Indian Standard Time">();
  });

  test("literal characters are preserved and Sign tokens are accumulated", () => {
    type R = FormatDate<
      "2024-07-14T16:05:09.123+05:30",
      "[Year:] YYYY [Month:] MMM [Day] Do"
    >;
    expectTypeOf<R>().toEqualTypeOf<"[Yepmr:] 2024 [7thnt4:] Jul [Day] 14th">();
  });
});
