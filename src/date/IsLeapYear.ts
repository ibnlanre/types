import { Mod } from "ts-arithmetic";

export type IsLeapYear<T extends number> = Mod<T, 4> extends 0
  ? Mod<T, 100> extends 0
    ? Mod<T, 400> extends 0
      ? 1
      : 0
    : 1
  : 0;
