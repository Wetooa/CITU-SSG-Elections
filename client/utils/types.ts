import { PARTYLISTS, POSITIONS_LIST } from './consts'

export type PartyList = (typeof PARTYLISTS)[number]

export type Position = (typeof POSITIONS_LIST)[number]

export interface Candidate {
  name: string
  position: Position
  party_list: PartyList
  votes: number
  balota_number: number
  social_media: {
    facebook?: string
    instagram?: string
    tiktok?: string
  }
  stances: {
    tuition_increase: boolean
    facility_expansion: boolean
    parking_space: boolean
    SSG_fee: boolean
    mental_health: boolean
    cats_in_campus: boolean
    AI_use: boolean
    campus_press_freedom: boolean
    student_activism: boolean
    duterte_arrest: boolean
    political_dynasties: boolean
    sara_impeachment: boolean
    legal_divorse: boolean
    legal_abortion: boolean
    equality_bill: boolean
    same_sex_marriage: boolean
    pro_palestine: boolean
    press_freedom: boolean
  }
}

export interface Leaderboard extends Candidate {
  award: string
}

export interface CandidateWithViews extends Candidate {
  views: number
}

export interface CandidateProfile extends Candidate {
  partyListNumber: number
  socials?: {
    facebook?: string
    instagram?: string
    twitter?: string
    tiktok?: string
  }
}

export interface Question {
  title: string
  question: string
  answer?: string
}

export type StanceValue = 'yes' | 'no' | 'abstain'

export interface Stance {
  emoji: string
  label: string
  [candidateName: string]: string | StanceValue
}

// Define new type
export type QuestionEntry = {
  [key: string]: string // Flexible keys, for q1, answer_q1, etc.
}

export type QA = {
  title: string
  question: string
  answer?: string
}
