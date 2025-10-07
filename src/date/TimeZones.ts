import type { Get, Keys } from "@ibnlanre/types";

export type TimeZoneData = Get<TimeZones, Keys<TimeZones>>;

export type ZoneData = {
  abbr: string;
  name: string;
};

export type TimeZones = {
  "+14:00": {
    abbr: "LINT";
    name: "Line Islands Time";
  };
  "+13:45": {
    abbr: "CHADT";
    name: "Chatham Island Daylight Time";
  };
  "+13:00": {
    abbr: "NZDT";
    name: "New Zealand Daylight Time";
  };
  "+12:45": {
    abbr: "CHAST";
    name: "Chatham Island Standard Time";
  };
  "+12:00": {
    abbr: "ANAT";
    name: "Anadyr Time";
  };
  "+11:00": {
    abbr: "AEDT";
    name: "Australian Eastern Daylight Time";
  };
  "+10:30": {
    abbr: "ACDT";
    name: "Australian Central Daylight Time";
  };
  "+10:00": {
    abbr: "AEST";
    name: "Australian Eastern Standard Time";
  };
  "+09:30": {
    abbr: "ACST";
    name: "Australian Central Standard Time";
  };
  "+09:00": {
    abbr: "JST";
    name: "Japan Standard Time";
  };
  "+08:45": {
    abbr: "ACWST";
    name: "Australian Central Western Standard Time";
  };
  "+08:00": {
    abbr: "CST";
    name: "China Standard Time";
  };
  "+07:00": {
    abbr: "WIB";
    name: "Western Indonesian Time";
  };
  "+06:30": {
    abbr: "MMT";
    name: "Myanmar Standard Time";
  };
  "+06:00": {
    abbr: "BST";
    name: "Bangladesh Standard Time";
  };
  "+05:45": {
    abbr: "NPT";
    name: "Nepal Time";
  };
  "+05:30": {
    abbr: "IST";
    name: "Indian Standard Time";
  };
  "+05:00": {
    abbr: "UZT";
    name: "Uzbekistan Time";
  };
  "+04:30": {
    abbr: "AFT";
    name: "Afghanistan Time";
  };
  "+04:00": {
    abbr: "GST";
    name: "Gulf Standard Time";
  };
  "+03:30": {
    abbr: "IRST";
    name: "Iran Standard Time";
  };
  "+03:00": {
    abbr: "MSK";
    name: "Moscow Standard Time";
  };
  "+02:00": {
    abbr: "EET";
    name: "Eastern European Time";
  };
  "+01:00": {
    abbr: "CET";
    name: "Central European Time";
  };
  "+00:00": {
    abbr: "GMT";
    name: "Greenwich Mean Time";
  };
  "-01:00": {
    abbr: "CVT";
    name: "Cape Verde Time";
  };
  "-02:00": {
    abbr: "CGT";
    name: "Azores Time";
  };
  "-03:00": {
    abbr: "ART";
    name: "Argentina Time";
  };
  "-03:30": {
    abbr: "NST";
    name: "Newfoundland Standard Time";
  };
  "-04:00": {
    abbr: "VET";
    name: "Venezuelan Standard Time";
  };
  "-05:00": {
    abbr: "EST";
    name: "Eastern Standard Time";
  };
  "-06:00": {
    abbr: "CST";
    name: "Central Standard Time";
  };
  "-07:00": {
    abbr: "MST";
    name: "Mountain Standard Time";
  };
  "-08:00": {
    abbr: "PST";
    name: "Pacific Standard Time";
  };
  "-09:00": {
    abbr: "AKST";
    name: "Alaska Standard Time";
  };
  "-09:30": {
    abbr: "MART";
    name: "Marquesas Time";
  };
  "-10:00": {
    abbr: "HST";
    name: "Hawaii–Aleutian Standard Time";
  };
  "-11:00": {
    abbr: "NUT";
    name: "Niue Time";
  };
  "-12:00": {
    abbr: "AoE";
    name: "Anywhere on Earth";
  };
};
