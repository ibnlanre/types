import { unset } from "@ibnlanre/types";

export type Nullable<T = unset> = Exclude<T, unset> | null;
