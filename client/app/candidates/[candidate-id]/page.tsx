"use client";

import Link from 'next/link';
import {
    CANDIDATE_TO_IMAGE,
    PARTYLIST_TO_ICON,
    PARTYLIST_TO_IMAGE,
  } from "@/utils/consts";
import CandidatesProfileSection from '@/components/candidates-info/candidates-profile';
import StanceComparisonSection from '@/components/candidates-info/stance-comparison';
import { CandidateProfile, Stance, StanceValue } from '@/utils/types';
import { Question } from '@/utils/types';
import QuestionSection from '@/components/candidates-info/questions';
import { useEffect, useState } from "react";
import { useParams } from 'next/navigation';


export default function CandidatePage() {
    const params = useParams();
    const candidateId = params['candidate-id']; 
    const [candidate, setCandidate] = useState<CandidateProfile | null>(null);
    const [stances, setStances] = useState<Stance[]>([]);


    const stanceMappings = {
      tuition_increase: { emoji: '💰', label: 'Tuition and Other Fees Increase for A.Y. 2025-2026' },
      facility_expansion: { emoji: '🏢', label: 'Expansion of Student Spaces and Facilities' },
      parking_space: { emoji: '🚗', label: 'Construction of Parking Spaces' },
      SSG_fee: { emoji: '🎟️', label: 'SSG Fee Increase' },
      mental_health: { emoji: '🧠', label: 'Mental Health Breaks' },
      cats_in_campus: { emoji: '🐱', label: 'Presence of Cats in the Campus' },
      AI_use: { emoji: '🤖', label: 'Use of AI in Academe' },
      campus_press_freedom: { emoji: '📰', label: 'Campus Press Freedom' },
      student_activism: { emoji: '✊', label: 'Student Activism' },
      duterte_arrest: { emoji: '⚖️', label: "Duterte's ICC Arrest" },
      political_dynasties: { emoji: '🏛️', label: 'Political Dynasties' },
      sara_impeachment: { emoji: '⚖️', label: "Sara's Impeachment" },
      legal_divorse: { emoji: '💔', label: 'Legalization of Divorce' },
      legal_abortion: { emoji: '⚕️', label: 'Legalization of Abortion' },
      equality_bill: { emoji: '🏳️‍🌈', label: 'SOGIESC Equality Bill' },
      same_sex_marriage: { emoji: '💍', label: 'Same-sex Marriage' },
      pro_palestine: { emoji: '🕊️', label: 'Pro-Palestine Declarations' },
      press_freedom: { emoji: '📢', label: 'Press Freedom' },
      education: { emoji: '📚', label: 'Education' },
      environment: { emoji: '🌱', label: 'Environment' },
      student_rights: { emoji: '🎓', label: 'Student Rights' },
    } as const;
  
    useEffect(() => {
      const fetchCandidate = async () => {
        try {
          const res = await fetch(`http://localhost:8000/candidates/info/${candidateId}`);
          const data = await res.json();

          console.log(data)
    
          const candidate: CandidateProfile = {
            name: data.name,
            position: data.position,
            party_list: data.party_list,
            balota_number: data.balota_number,
            partyListNumber: data.balota_number,
            socials: {},
            social_media: {},
            stances: data.stances,
            votes: data.votes,

          };

          console.log(candidate)
          const candidateIdReal = data._id
          // console.log("REAL: " + candidateIdReal)
    
          if (data.social_media.facebook !== "N/A") {
            candidate.socials!.facebook = data.social_media.facebook;
          }
          if (data.social_media.instagram !== "N/A") {
            candidate.socials!.instagram = data.social_media.instagram;
          }
          if (data.social_media.tiktok !== "N/A") {
            candidate.socials!.tiktok = data.social_media.tiktok;
          }

          setCandidate(candidate);

          const rawStances = data.stances;

          const allFalse = Object.values(rawStances).every(value => value === false);
          
          const fetchedStances: Stance[] = Object.entries(rawStances).map(([key, value]) => {
            const mapping = stanceMappings[key as keyof typeof stanceMappings];
            if (!mapping) return null;
          
            return {
              emoji: mapping.emoji,
              label: mapping.label,
              [data.name]: allFalse ? 'abstain' : value ? 'yes' : 'no',
            };
          }).filter(Boolean) as Stance[];
          
        
          setStances(fetchedStances);

          const res2 = await fetch(`http://localhost:8000/candidates/680f5d6a80c63db51b33b18e/qna`);
          const data2 = await res2.json();
          console.log(data2)

        } catch (error) {
          console.error("Failed to fetch candidate:", error);
        }
      };
    
      if (candidateId) {
        fetchCandidate();
      }
    }, [candidateId]);

    const generalQuestions: Question[] = [
      {
        title: "Tuition and Other Fees Increase (TOFI)",
        question: "How do you perceive the administration’s plan on increasing the tuition fee for the next academic year?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      },
      {
        title: "University Administration Performance",
        question: "How would you assess the university administration’s performance in terms of responding to student concerns and implementing pro-student policies?",
        answer: "",
      },
      {
        title: "SSG Administration Performance",
        question: "What issues do you believe did the 40th SSG administration fail to address? How would you address it?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      },
    ];
  
    const courseQuestions: Question[] = [
      {
        title: "Lorem ipsum dolor sit ame",
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      },
      {
        title: "Lorem ipsum dolor sit ame",
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "",
      },
      {
        title: "Lorem ipsum dolor sit ame",
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      },
    ];
    

    return (
        <>
            <main className="max-w-7x1 mx-auto px-4 flex flex-col gap-4">    
                {candidate && <CandidatesProfileSection candidate={candidate} />}
                {candidate && stances && <StanceComparisonSection candidate={candidate} stances={stances}/>}
                {/* <QuestionSection generalQuestions={generalQuestions} courseQuestions={courseQuestions}/>  */}
            </main>
        </>
    );
}