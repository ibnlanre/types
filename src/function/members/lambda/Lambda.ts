import { Fn, Size } from "@ibnlanre/types";

export interface Lambda<Input extends unknown> extends Fn {
  input_size: Size<Fn.Preset<Fn.Reflect<Input>>>;
}
