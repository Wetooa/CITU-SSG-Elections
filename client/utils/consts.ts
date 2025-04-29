import { PartyList } from "./types";

export const PARTYLIST_TO_IMAGE: Record<PartyList, string> = {
  United: "/party-list/united.jpg",
  Just: "/party-list/just.jpg",
};

export const PARTYLIST_TO_ICON: Record<PartyList, string> = {
  United: "/icons/united.svg",
  Just: "/icons/just.svg",
};

const CANDIDATE_URL = "/candidates";

export const CANDIDATE_TO_IMAGE: Record<string, string> = {
  // "Harold Dave C.": `${CANDIDATE_URL}/HAROLD.webp`,
  // "Aczriel Zeth M.": `${CANDIDATE_URL}/ACZRIEL.webp`,
  // "John Mark A.": `${CANDIDATE_URL}/JOHN.webp`,
  // "Jasmine Junelle U.": `${CANDIDATE_URL}/JASMINE.webp`,
  // "John Mark L.": `${CANDIDATE_URL}/JOHN.webp`,
  // "Cenieza Rosewil C.": `${CANDIDATE_URL}/CENIEZA.webp`,
  "Dejon Nash I.": `${CANDIDATE_URL}/DEJON.webp`,
  "Calsita Angel-Romz B.": `${CANDIDATE_URL}/CALSITA.webp`,
  "Quiban Palm Antonette C.": `${CANDIDATE_URL}/QUIBAN.webp`,
  "Ferrer Faith Zoe D.": `${CANDIDATE_URL}/FERRER.webp`,
  "Bedro Frittzie Ann E.": `${CANDIDATE_URL}/BEDRO.webp`,
  "Telmoso Jan Nhericka R.": `${CANDIDATE_URL}/TELMOSO.webp`,
  "Gimoros Charlyn Paula L.": `${CANDIDATE_URL}/GIMOROS.webp`,
  // "Ledesma Jean Louben S.": `${CANDIDATE_URL}/LEDESMA.webp`,
  "Maitim Rhodyl B.": `${CANDIDATE_URL}/MAITIM.webp`,
  "Maghilum Alexander Gabriel B.": `${CANDIDATE_URL}/MAGHILUM.webp`,
  "Deguma Marry Joyce L.": `${CANDIDATE_URL}/DEGUMA.webp`,
  "Bayabos Diosa Marie C.": `${CANDIDATE_URL}/BAYABOS.webp`,
  "Miranda Carl Angelo Iverson A.": `${CANDIDATE_URL}/MIRANDA.webp`,
  "Logarta Sophia Gabrielle N.": `${CANDIDATE_URL}/LOGARTA.webp`,
  "Alonte John Prince L.": `${CANDIDATE_URL}/ALONTE.webp`,
  "Eral Darryll B.": `${CANDIDATE_URL}/ERAL.webp`,
  "Caipang Chrisnel Graine J.": `${CANDIDATE_URL}/CAIPANG.webp`,
  "Baculi Cammile C.": `${CANDIDATE_URL}/BACULI.webp`,
  "Nuez Carl Justine O.": `${CANDIDATE_URL}/NUEZ.webp`,
  "Licuanan Kristine Ysabel O.": `${CANDIDATE_URL}/LICUANAN.webp`,
  "Tutong Jhojanna Jane P.": `${CANDIDATE_URL}/TUTONG.webp`,
  "Joson Edzel Marie C.": `${CANDIDATE_URL}/JOSON.webp`,
  "Lloren Lei Rosell": `${CANDIDATE_URL}/LLOREN.webp`,
  "Largo Christian Harold D.": `${CANDIDATE_URL}/LARGO.webp`,
  "Diloy Charleez Danielle C.": `${CANDIDATE_URL}/DILOY.webp`,
  "Lerog Gilbert Augistin Ocasla": `${CANDIDATE_URL}/LEROG.webp`,
  "Saavedra Gellea Tru": `${CANDIDATE_URL}/SAAVEDRA.webp`,
  "Aniceto Adriel John Phillip": `${CANDIDATE_URL}/ANICETO.webp`,
  "Getuaban Ma. Reian C.": `${CANDIDATE_URL}/GETUABAN.webp`,
  "Gocotano Maria Carmelle M.": `${CANDIDATE_URL}/GOCOTANO.webp`,
  // "Nepomuceno Andrea Nicole M.": `${CANDIDATE_URL}/NEPOMUCENO.webp`,
  // "Floresca Mary Adelaine N.": `${CANDIDATE_URL}/FLORESCA.webp`,
  // Ria: `${CANDIDATE_URL}/RIA.webp`,
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
