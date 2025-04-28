import { PartyList } from "./types";

// FIX: Fix later for independent party list
export const PARTYLIST_TO_IMAGE: Record<PartyList, string> = {
  United: "/party-list/united.jpg",
  Just: "/party-list/just.jpg",
  Independent: "/party-list/united.jpg",
};

export const PARTYLIST_TO_ICON: Record<PartyList, string> = {
  United: "/icons/united.svg",
  Just: "/icons/just.svg",
  Independent: "/icons/united.svg",
};

export const CANDIDATE_TO_IMAGE: Record<string, string> = {
  "Adrian Sajulga": "/candidates/duterte-placeholder.png",
};

export const VOTING_DATE: Date = new Date("2025-04-30T08:00:00");

export const POSITIONS_LIST = [
  "President",
  "Vice President",
  "Secretary General",
  "Treasurer General",
  "Auditor",
  "BSME Representative",
  "BSIT Representative",
  "BSEM Representative",
  "BSEE Representative",
  "BSIE Representative",
  "BSCE Representative",
  "BSARCH Representative",
  "BSCS Representative",
  "CNAHS Representative",
  "CMBA Representative",
  "CCJ Representative",
  "CASE Representative",
] as const;

export const PARTYLISTS = ["United", "Just"] as const;
