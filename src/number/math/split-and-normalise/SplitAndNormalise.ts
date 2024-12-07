import type { Pop } from "@ibnlanre/types";

import type { Normalise } from "../normalise";
import type { ToSignedFloat } from "../to-signed-float";

export type SplitAndNormalise<
  Left extends number,
  Right extends number
> = Normalise<Pop<ToSignedFloat<Left>>, Pop<ToSignedFloat<Right>>>;
