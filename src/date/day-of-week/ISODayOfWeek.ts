import type { Add, Modulo } from "@ibnlanre/types";
import type { GregorianDayOfWeek } from "./GregorianDayOfWeek";

export type ISODayOfWeek<
  Year extends string,
  Month extends string,
  Day extends string
> = Add<Modulo<Add<GregorianDayOfWeek<Year, Month, Day>, 5>, 7>, 1>;
