import { Add, Mod } from "ts-arithmetic";
import { GregorianDayOfWeek } from "./GregorianDayOfWeek";

export type ISODayOfWeek<
  Year extends string,
  Month extends string,
  Day extends string
> = Add<Mod<Add<GregorianDayOfWeek<Year, Month, Day>, 5>, 7>, 1>;
