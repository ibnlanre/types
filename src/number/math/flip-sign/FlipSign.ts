import type { Sign } from "../sign";
import type { SignMap } from "../sign-map";

export type FlipSign<S extends Sign> = SignMap<"+", "-">[S];
