import type { unset } from "@ibnlanre/types";

export type Nullish<T = unset> = Exclude<T, unset> | null | undefined;
