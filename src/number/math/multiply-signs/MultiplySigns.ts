import type { Sign } from "../sign";
import type { SignMap } from "../sign-map";

type MultiplySignsHelper = SignMap<SignMap<"+", "-">, SignMap<"-", "+">>;

export type MultiplySigns<
  Left extends Sign,
  Right extends Sign
> = MultiplySignsHelper[Left][Right];
