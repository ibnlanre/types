import { SignMap, Sign } from "..";

export type FlipSign<S extends Sign> = SignMap<"+", "-">[S];
