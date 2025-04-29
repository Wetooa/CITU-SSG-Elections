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
  "Alonte, John Prince L.": `${CANDIDATE_URL}/ALONTE.webp`,
  "Aniceto, Adriel John Phillip": `${CANDIDATE_URL}/ANICETO.webp`,
  "Agutaya, Jasmine Junelle U.": `${CANDIDATE_URL}/AGUTAYA.webp`,
  "Baculi, Cammile C.": `${CANDIDATE_URL}/BACULI.webp`,
  "Bayabos, Diosa Marie C.": `${CANDIDATE_URL}/BAYABOS.webp`,
  "Bedro, Frittzie Ann E.": `${CANDIDATE_URL}/BEDRO.webp`,
  "Caipang, Chrisnel Graine J.": `${CANDIDATE_URL}/CAIPANG.webp`,
  "Calsita, Angel-Romz B.": `${CANDIDATE_URL}/CALSITA.webp`,
  "Dejon, Nash I.": `${CANDIDATE_URL}/DEJON.webp`,
  "Deguma, Marry Joyce L.": `${CANDIDATE_URL}/DEGUMA.webp`,
  "Diloy, Charleez Danielle C.": `${CANDIDATE_URL}/DILOY.webp`,
  "Eral, Darryll B.": `${CANDIDATE_URL}/ERAL.webp`,
  "Ferrer, Faith Zoe D.": `${CANDIDATE_URL}/FERRER.webp`,
  "Getuaban, Ma. Reian C.": `${CANDIDATE_URL}/GETUABAN.webp`,
  "Gimoros, Charlyn Paula L.": `${CANDIDATE_URL}/GIMOROS.webp`,
  "Gocotano, Maria Carmelle M.": `${CANDIDATE_URL}/GOCOTANO.webp`,
  "Joson, Edzel Marie C.": `${CANDIDATE_URL}/JOSON.webp`,
  "Largo, Christian Harold D.": `${CANDIDATE_URL}/LARGO.webp`,
  "Licuanan, Kristine Ysabel O.": `${CANDIDATE_URL}/LICUANAN.webp`,
  "Lloren, Lei Rosell": `${CANDIDATE_URL}/LLOREN.webp`,
  "Logarta, Sophia Gabrielle N.": `${CANDIDATE_URL}/LOGARTA.webp`,
  "Maghilum, Alexander Gabriel B.": `${CANDIDATE_URL}/MAGHILUM.webp`,
  "Maitim, Rhodyl B.": `${CANDIDATE_URL}/MAITIM.webp`,
  "Miranda, Carl Angelo Iverson A.": `${CANDIDATE_URL}/MIRANDA.webp`,
  "Nuez, Carl Justine O.": `${CANDIDATE_URL}/NUEZ.webp`,
  "Quiban, Palm Antonette C.": `${CANDIDATE_URL}/QUIBAN.webp`,
  "Pahulaya, John Mark A.": `${CANDIDATE_URL}/PAHULAYA.webp`,
  "Saavedra, Gellea Tru": `${CANDIDATE_URL}/SAAVEDRA.webp`,
  "Sanchez, Cenieza Rosewil C.": `${CANDIDATE_URL}/SANCHEZ.webp`,
  "Telmoso, Jan Nhericka R.": `${CANDIDATE_URL}/TELMOSO.webp`,
  "Tutong, Jhojanna Jane P.": `${CANDIDATE_URL}/TUTONG.webp`,
  "Lerog, Gilbert Augistin Ocasla": `${CANDIDATE_URL}/LEROG.webp`,
  "Baes, Harold Dave C.": `${CANDIDATE_URL}/BAES.webp`,
  "Villamala, Aczriel Zeth M.": `${CANDIDATE_URL}/VILLAMALA.webp`,
  "Ariban, John Mark L.": `${CANDIDATE_URL}/ARIBAN.webp`,
  // "Ledesma, Jean Louben S.": `${CANDIDATE_URL}/LEDESMA.webp`,
  // "Nepomuceno, Andrea Nicole M.": `${CANDIDATE_URL}/NEPOMUCENO.webp`,
  // "Floresca, Mary Adelaine N.": `${CANDIDATE_URL}/FLORESCA.webp`,
  // Ria: `${CANDIDATE_URL}/RIA.webp`,
  "Garciano, Earl": `${CANDIDATE_URL}/GARCIANO.webp`,
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
