import type { ModUnsignedFloats } from "../mod-unsigned-floats";
import type { Sign } from "../sign";
import type { SignedFloat } from "../signed-float";

export type ModSignedFloats<
  Numerator extends SignedFloat,
  Divisor extends SignedFloat
> = Numerator extends SignedFloat<
  infer NumeratorSign,
  infer NumeratorUnsignedFloat
>
  ? Divisor extends SignedFloat<Sign, infer DivisorUnsignedFloat>
    ? SignedFloat<
        NumeratorSign,
        ModUnsignedFloats<NumeratorUnsignedFloat, DivisorUnsignedFloat>
      >
    : never
  : never;
