import {
  If,
  Pipe,
  TExcept,
  TIsExactType,
  TMap,
  TParseInt,
  TToEntries,
  TWith,
  With,
  Call,
  Except,
  IsExactType,
  TFromEntries,
  THas,
  TIf,
  TPipe,
  TRetrieve,
  TContains,
  TIncludes,
} from "@ibnlanre/types";

export type DateFormat = {
  year: string;
  month: string;
  day: string;
  hour: string;
  minutes: string;
  seconds: string;
  milliseconds: string;
  timezone: string;
};

export type BaseDateFormat = {
  year: "2001";
  month: "01";
  day: "01";
  hour: "00";
  minutes: "00";
  seconds: "00";
  milliseconds: "000";
  timezone: "+00:00";
};
