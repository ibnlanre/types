import { Get, Ordinal, Stringify } from "@ibnlanre/types";

import { DateFormat } from "../DateFormat";
import type { QuarterOfYear } from "../quarter-of-year";

export type QuarterFormatSymbols = "Q" | "Qo";

export type QuarterFormat<
  In extends QuarterFormatSymbols,
  Out extends DateFormat
> = In extends "Q"
  ? Stringify<QuarterOfYear<Get<Out, "month">>>
  : In extends "Qo"
  ? Ordinal<QuarterOfYear<Get<Out, "month">>>
  : never;
