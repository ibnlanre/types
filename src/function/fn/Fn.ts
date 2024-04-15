import { Dictionary, Retrieve, Size, TakeFromArray } from "@ibnlanre/types";
import {
  Arguments,
  ComposeLeft,
  ComposeRight,
  Lambda,
  Parameters,
  Signature,
} from "../members";
import { Collect, Devoid, Preset, Reflect, Select } from "../symbol";

interface FnImpl {
  /**
   * Field for arguments within higher-order functions
   *
   * @description
   * This field is used to represent arguments in a higher-order function.
   */
  args: unknown;

  /**
   * A field that represents a slot.
   *
   * @description
   * This field is used to represent arguments in a function.
   */
  slot: unknown[];

  /**
   * Field for the return value of functions
   *
   * @description
   * This field is used to represent the return value of a function.
   */
  data: unknown;
}

interface FnArgs extends FnImpl {
  0: Retrieve<this["args"], 0>;
  1: Retrieve<this["args"], 1>;
  2: Retrieve<this["args"], 2>;
  3: Retrieve<this["args"], 3>;
  4: Retrieve<this["args"], 4>;
  5: Retrieve<this["args"], 5>;
  6: Retrieve<this["args"], 6>;
  7: Retrieve<this["args"], 7>;
  8: Retrieve<this["args"], 8>;
  9: Retrieve<this["args"], 9>;
}

/**
 * Parameterized function type
 * @see https://github.com/microsoft/TypeScript/issues/1213#issuecomment-1215039765
 * @see https://stackoverflow.com/a/73533674
 */
export interface Fn<Params extends Dictionary<number> = {}> extends FnArgs {
  input_size: Size<TakeFromArray<this["slot"], void>>;

  /**
   * Field for parameters within higher-order functions
   *
   * @description
   * This field is used to represent parameters in a higher-order function.
   */
  params: [
    Params[0],
    Params[1],
    Params[2],
    Params[3],
    Params[4],
    Params[5],
    Params[6],
    Params[7],
    Params[8],
    Params[9]
  ];
}

export declare namespace Fn {
  export {
    Arguments,
    Collect,
    ComposeLeft,
    ComposeRight,
    Devoid,
    Lambda,
    Parameters,
    Preset,
    Reflect,
    Select,
    Signature,
  };
}
