import type { BitMap } from "../bit-map";
import type { FourBitRowVector } from "../four-bit-row-vector";

// two-bit-map
export type FourBitSquareMatrix<Nibble extends FourBitRowVector> = BitMap<
  BitMap<Nibble[0], Nibble[1]>,
  BitMap<Nibble[2], Nibble[3]>
>;
