import { Not } from "@ibnlanre/types";
import { IsPositive } from "../is-positive";

export type IsNegative<N extends number> = Not<IsPositive<N>>;
