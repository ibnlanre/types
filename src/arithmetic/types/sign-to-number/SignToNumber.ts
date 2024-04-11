import { Sign } from "..";

export type SignToNumber<TSign extends Sign> = TSign extends "+" ? "" : TSign;
