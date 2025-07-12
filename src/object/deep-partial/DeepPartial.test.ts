import { describe, expectTypeOf, it } from "vitest";
import type { DeepPartial } from "./DeepPartial";

type Address = {
  street: string;
  city: string;
  postalCodes: string[];
};

type Person = {
  name: string;
  age: number;
  address: Address;
};

describe("DeepPartial", () => {
  it("should make all properties optional", () => {
    type PartialAddress = DeepPartial<Address>;

    expectTypeOf<PartialAddress>().toEqualTypeOf<{
      street?: string;
      postalCodes?: string[];
      city?: string;
    }>();
  });

  it("should make nested properties optional", () => {
    type PartialPerson = DeepPartial<Person>;

    expectTypeOf<PartialPerson>().toEqualTypeOf<{
      name?: string;
      age?: number;
      address?: {
        street?: string;
        city?: string;
        postalCodes?: string[];
      };
    }>();
  });

  it("should not affect array elements", () => {
    type Metadata = {
      items: Item[];
    };

    type Item = {
      id: number;
      details: {
        description: string;
        tags: string[];
      };
    };

    type PartialMetadata = DeepPartial<Metadata>;

    expectTypeOf<PartialMetadata>().toEqualTypeOf<{
      items?: Item[] | undefined;
    }>();
  });

  it("should not affect sets and maps", () => {
    type MapType = Map<string, number>;
    type SetType = Set<string>;

    type PartialMapType = DeepPartial<MapType>;
    type PartialSetType = DeepPartial<SetType>;

    expectTypeOf<PartialMapType>().toEqualTypeOf<Map<string, number>>();

    expectTypeOf<PartialSetType>().toEqualTypeOf<Set<string>>();
  });
});
