import { Sign } from "../sign";
import { SignMap } from "../sign-map";

export type FlipSign<S extends Sign> = SignMap<"+", "-">[S];
