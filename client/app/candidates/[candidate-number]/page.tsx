"use client";

import Link from 'next/link';
import {
    CANDIDATE_TO_IMAGE,
    PARTYLIST_TO_ICON,
    PARTYLIST_TO_IMAGE,
  } from "@/utils/consts";
import CandidatesProfileSection from '@/components/candidates-info/candidates-profile';
import StanceComparisonSection from '@/components/candidates-info/stance-comparison';
import { CandidateProfile } from '@/utils/types';

export default function CandidatePage() {
    const candidates: CandidateProfile[] = [
        {
          name: 'Adrian Sajulga',
          position: 'Vice-President',
          partyList: 'United',
          partyListNumber: 32,
          socials: {
            facebook: 'adrian.sajulga',
            instagram: 'adrian.sajulga',
            tiktok: 'adrian.sajulga',
          },
        },
        {
          name: 'Simon Escaño',
          position: 'Vice-President',
          partyList: 'Just',
          partyListNumber: 12,
          socials: {
            facebook: 'simon.escano',
          },
        },
      ];
      
      const stances = [
        {
          emoji: '🏳️‍🌈',
          label: 'LGBTQ+ Rights on Campus',
          'Adrian Sajulga': 'yes',
          'Simon Escaño': 'no',
        },
        {
          emoji: '💰',
          label: 'Tuition Transparency',
          'Adrian Sajulga': 'no',
          'Simon Escaño': 'yes',
        },
        {
          emoji: '🧠',
          label: 'Mental Health Services',
          'Adrian Sajulga': 'no',
          'Simon Escaño': 'yes',
        },
        {
          emoji: '🗣️',
          label: 'Freedom of Expression',
          'Adrian Sajulga': 'yes',
          'Simon Escaño': 'abstain',
        },
        {
          emoji: '📚',
          label: 'No Class Week Before Finals',
          'Adrian Sajulga': 'yes',
          'Simon Escaño': 'no',
        },
      ];

    return (
        <>
            <main className="max-w-7x1 mx-auto px-4 flex flex-col gap-4">         
                <CandidatesProfileSection candidate={candidates[0]}/>
                <StanceComparisonSection candidates={candidates} stances={stances}/>   
            </main>
        </>
    );
}