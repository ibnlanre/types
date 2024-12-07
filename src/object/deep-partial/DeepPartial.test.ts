import { describe, expectTypeOf, it } from "vitest";
import type { DeepPartial } from "./DeepPartial";

type Person = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
};

describe("DeepPartial", () => {
  it("should make all properties optional when no path is specified", () => {
    type PartialPerson = DeepPartial<Person>;

    expectTypeOf<PartialPerson>().toEqualTypeOf<{
      name?: string | undefined;
      age?: number | undefined;
      address?:
        | {
            street?: string | undefined;
            city?: string | undefined;
          }
        | undefined;
    }>();
  });

  it("should make specified path optional and keep other properties as required", () => {
    type PartialPerson = DeepPartial<Person, "address">;
    expectTypeOf<PartialPerson>().toEqualTypeOf<{
      name: string;
      age: number;
      address?:
        | {
            street: string;
            city: string;
          }
        | undefined;
    }>();
  });

  it("should make specified nested path optional and keep other properties as required", () => {
    type PartialPerson = DeepPartial<Person, "address.street">;

    expectTypeOf<PartialPerson>().toEqualTypeOf<{
      name: string;
      age: number;
      address: {
        city: string;
        street?: string | undefined;
      };
    }>();
  });

  it("should make multiple specified paths optional and keep other properties as required", () => {
    type PartialPerson = DeepPartial<Person, "name" | "address.street">;

    expectTypeOf<PartialPerson>().toEqualTypeOf<{
      age: number;
      address:
        | {
            street: string;
            city: string;
          }
        | {
            city: string;
            street?: string | undefined;
          };
      name?: string | undefined;
    }>();
  });
});
