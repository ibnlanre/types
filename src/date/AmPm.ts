import { Gt } from "@ibnlanre/types";
import { HourOfDay } from "./hour-of-day/HourOfDay";

export type AmPm<T extends string> = Gt<HourOfDay<T>, 11> extends 1
  ? "PM"
  : "AM";
