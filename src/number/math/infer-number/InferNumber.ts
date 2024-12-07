import type { Template } from "@ibnlanre/types";

import type { Sign } from "../sign";
import type { SignToNumber } from "../sign-to-number";

export type InferNumber<S extends string, TSign extends Sign> = S extends "0"
  ? 0
  : Template<[SignToNumber<TSign>, S]> extends `${infer Number extends number}`
  ? Number
  : never;
