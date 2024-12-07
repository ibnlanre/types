import type { Sign } from "../sign";

export type SeparateSign<Input extends string> =
  Input extends `${infer TSign extends Sign}${infer Number}`
    ? [sign: TSign, float: Number]
    : [sign: "+", float: Input];
