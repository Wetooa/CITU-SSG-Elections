import { PARTYLISTS, POSITIONS_LIST } from "./consts";

export type PartyList = (typeof PARTYLISTS)[number];

export type Position = (typeof POSITIONS_LIST)[number];

export interface Candidate {
  name: string;
  position: Position;
  partyList: PartyList;
}

export interface CandidateWithVotes extends Candidate {
  votes: number;
}

export interface Leaderboard extends Candidate {
  award: string;
}

export interface CandidateWithViews extends Candidate {
  views: number;
}

export interface CandidateProfile extends Candidate {
  partyListNumber: number;
  socials?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    tiktok?: string;
  };
}

export interface Question {
  title: string;
  question: string;
  answer?: string;
}
