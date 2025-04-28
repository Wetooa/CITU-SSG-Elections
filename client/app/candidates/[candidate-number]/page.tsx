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
import { Question } from '@/utils/types';
import QuestionSection from '@/components/candidates-info/questions';

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

      const generalQuestions: Question[] = [
        {
          title: "Tuition and Other Fees Increase (TOFI)",
          question: "How do you perceive the administration’s plan on increasing the tuition fee for the next academic year?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
          expanded: true,
        },
        {
          title: "University Administration Performance",
          question: "How would you assess the university administration’s performance in terms of responding to student concerns and implementing pro-student policies?",
          answer: "",
          expanded: false,
        },
        {
          title: "SSG Administration Performance",
          question: "What issues do you believe did the 40th SSG administration fail to address? How would you address it?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
          expanded: true,
        },
      ];
    
      const courseQuestions: Question[] = [
        {
          title: "Lorem ipsum dolor sit ame",
          question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
          expanded: true,
        },
        {
          title: "Lorem ipsum dolor sit ame",
          question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
          answer: "",
          expanded: false,
        },
        {
          title: "Lorem ipsum dolor sit ame",
          question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
          answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
          expanded: true,
        },
      ];
    return (
        <>
            <main className="max-w-7x1 mx-auto px-4 flex flex-col gap-4">         
                <CandidatesProfileSection candidate={candidates[0]}/>
                <StanceComparisonSection candidates={candidates} stances={stances}/>
                <QuestionSection generalQuestions={generalQuestions} courseQuestions={courseQuestions}/> 
            </main>
        </>
    );
}