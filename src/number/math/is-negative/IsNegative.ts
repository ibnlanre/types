import type { Not } from "@ibnlanre/types";
import type { IsPositive } from "../is-positive";

export type IsNegative<N extends number> = Not<IsPositive<N>>;
