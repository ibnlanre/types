import type { GreaterThan } from "@ibnlanre/types";
import type { HourOfDay } from "./hour-of-day/HourOfDay";

export type AmPm<T extends string> = GreaterThan<HourOfDay<T>, 11> extends 1
  ? "PM"
  : "AM";
