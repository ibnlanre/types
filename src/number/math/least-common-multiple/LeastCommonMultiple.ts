import type { Divide } from "../divide";
import type { HighestCommonFactor } from "../highest-common-factor";
import type { Multiply } from "../multiply";

export type LeastCommonMultiple<A extends number, B extends number> = Divide<
  Multiply<A, B>,
  HighestCommonFactor<A, B>
>;
