import { Pop } from "@ibnlanre/types";

import { Normalise } from "../normalise";
import { ToSignedFloat } from "../to-signed-float";

export type SplitAndNormalise<
  Left extends number,
  Right extends number
> = Normalise<Pop<ToSignedFloat<Left>>, Pop<ToSignedFloat<Right>>>;
