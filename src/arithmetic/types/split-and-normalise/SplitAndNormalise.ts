import { Pop } from "@ibnlanre/types";
import { Normalise, ToSignedFloat } from "..";

export type SplitAndNormalise<
  Left extends number,
  Right extends number
> = Normalise<Pop<ToSignedFloat<Left>>, Pop<ToSignedFloat<Right>>>;
