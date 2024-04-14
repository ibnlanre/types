import { Modulo } from "@ibnlanre/types";

export type IsLeapYear<T extends number> = Modulo<T, 4> extends 0
  ? Modulo<T, 100> extends 0
    ? Modulo<T, 400> extends 0
      ? 1
      : 0
    : 1
  : 0;
