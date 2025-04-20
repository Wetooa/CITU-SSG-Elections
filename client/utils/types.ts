export type PartyList = "United" | "Just" | "Independent";

export interface Candidate {
  name: string;
  position: string;
  partyList: PartyList;
}

export interface CandidateWithVotes extends Candidate {
  votes: number;
}

export interface Leaderboard extends Candidate {
  award: string;
}

export interface CandidateProfile extends Candidate{
  partyListNumber: number;
  socials?:{
    facebook?: string;
    instagram?: string;
    twitter?: string;
    tiktok?: string;
  }
}
