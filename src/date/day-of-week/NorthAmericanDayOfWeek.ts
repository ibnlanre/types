import { Mod, Subtract } from "@ibnlanre/types";
import { GregorianDayOfWeek } from "./GregorianDayOfWeek";

export type NorthAmericanDayOfWeek<
  Year extends string,
  Month extends string,
  Day extends string
> = Mod<Subtract<GregorianDayOfWeek<Year, Month, Day>, 1>, 7>;
