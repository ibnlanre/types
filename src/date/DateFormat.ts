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

export type EpochDateFormat = {
  year: "1970";
  month: "01";
  day: "01";
  hour: "00";
  minutes: "00";
  seconds: "00";
  milliseconds: "000";
  timezone: "+00:00";
};
