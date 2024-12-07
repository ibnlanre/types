import type { Sign } from "../sign";

export type SignToNumber<TSign extends Sign> = TSign extends "+" ? "" : TSign;
