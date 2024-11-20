import type { CarriageReturn } from "./CarriageReturn";
import type { FormFeed } from "./FormFeed";
import type { NewLine } from "./NewLine";
import type { Space } from "./Space";
import type { Tab } from "./Tab";
import type { VerticalTab } from "./VerticalTab";

export type WhiteSpace =
  | Space
  | Tab
  | NewLine
  | CarriageReturn
  | VerticalTab
  | FormFeed;
