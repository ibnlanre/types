import { GreaterThan } from "../greater-than";

export type LessThan<Left extends number, Right extends number> = GreaterThan<
  Right,
  Left
>;
