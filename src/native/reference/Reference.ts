import type { Buffers } from "../buffers";
import type { Derivatives } from "../derivatives";
import type { Indexed } from "../indexed";
import type { Keyed } from "../keyed";

export type Reference = Indexed | Keyed | Derivatives | Buffers;
