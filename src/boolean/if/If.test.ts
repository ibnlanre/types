import { describe, expectTypeOf, it } from "vitest";
import type { If } from "./If";

describe("If", () => {
  it("should return the 'Then' type if 'This' is 1", () => {
    expectTypeOf<If<1, string, number>>().toEqualTypeOf<string>();
    expectTypeOf<If<1, string, number>>().toEqualTypeOf<string>();
  });

  it("should return the 'Else' type if 'This' is 0", () => {
    expectTypeOf<If<0, string, number>>().toEqualTypeOf<number>();
    expectTypeOf<If<0, string, number>>().toEqualTypeOf<number>();
  });
});
