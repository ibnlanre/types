import type { Elements, Fn } from "@ibnlanre/types";

export type Signature<Callback extends Fn> = Elements<Fn.Arguments<Callback>>;
