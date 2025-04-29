"use client";

import CandidatesProfileSection from "@/components/candidates-info/candidates-profile";
import QuestionSection from "@/components/candidates-info/questions";
import StanceComparisonSection from "@/components/candidates-info/stance-comparison";
import { Candidate, CandidateProfile, Question } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

export default function CandidatePage() {
  const NEXT_PUBLIC_SERVER_LINK = process.env.NEXT_PUBLIC_SERVER_LINK;

  const { data: candidatesData, isLoading } = useQuery({
    queryKey: ["candidatesData"],
    queryFn: async () => {
      const response = await fetch(`${NEXT_PUBLIC_SERVER_LINK}/candidates`);
      const result = await response.json();
      return result as Candidate[];
    },
  });

  const candidates: CandidateProfile[] = [
    {
      name: "Adrian Sajulga",
      position: "Vice President",
      party_list: "United",
      partyListNumber: 32,
      social_media: {
        facebook: "adrian.sajulga",
        instagram: "adrian.sajulga",
        tiktok: "adrian.sajulga",
      },
      votes: 0,
      balota_number: 0,
      stances: {
        tuition_increase: false,
        facility_expansion: false,
        parking_space: false,
        SSG_fee: false,
        mental_health: false,
        cats_in_campus: false,
        AI_use: false,
        campus_press_freedom: false,
        student_activism: false,
        duterte_arrest: false,
        political_dynasties: false,
        sara_impeachment: false,
        legal_divorse: false,
        legal_abortion: false,
        equality_bill: false,
        same_sex_marriage: false,
        pro_palestine: false,
        press_freedom: false,
      },
    },
    {
      name: "Simon Escaño",
      position: "Vice President",
      party_list: "Just",
      partyListNumber: 12,
      social_media: {
        facebook: "simon.escano",
        instagram: "",
        tiktok: "",
      },
      votes: 0,
      balota_number: 0,
      stances: {
        tuition_increase: false,
        facility_expansion: false,
        parking_space: false,
        SSG_fee: false,
        mental_health: false,
        cats_in_campus: false,
        AI_use: false,
        campus_press_freedom: false,
        student_activism: false,
        duterte_arrest: false,
        political_dynasties: false,
        sara_impeachment: false,
        legal_divorse: false,
        legal_abortion: false,
        equality_bill: false,
        same_sex_marriage: false,
        pro_palestine: false,
        press_freedom: false,
      },
    },
  ];

  const stances = [
    {
      emoji: "🏳️‍🌈",
      label: "LGBTQ+ Rights on Campus",
      "Adrian Sajulga": "yes",
      "Simon Escaño": "no",
    },
    {
      emoji: "💰",
      label: "Tuition Transparency",
      "Adrian Sajulga": "no",
      "Simon Escaño": "yes",
    },
    {
      emoji: "🧠",
      label: "Mental Health Services",
      "Adrian Sajulga": "no",
      "Simon Escaño": "yes",
    },
    {
      emoji: "🗣️",
      label: "Freedom of Expression",
      "Adrian Sajulga": "yes",
      "Simon Escaño": "abstain",
    },
    {
      emoji: "📚",
      label: "No Class Week Before Finals",
      "Adrian Sajulga": "yes",
      "Simon Escaño": "no",
    },
  ];

  const generalQuestions: Question[] = [
    {
      title: "Tuition and Other Fees Increase (TOFI)",
      question:
        "How do you perceive the administration’s plan on increasing the tuition fee for the next academic year?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      title: "University Administration Performance",
      question:
        "How would you assess the university administration’s performance in terms of responding to student concerns and implementing pro-student policies?",
      answer: "",
    },
    {
      title: "SSG Administration Performance",
      question:
        "What issues do you believe did the 40th SSG administration fail to address? How would you address it?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
  ];

  const courseQuestions: Question[] = [
    {
      title: "Lorem ipsum dolor sit ame",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
    {
      title: "Lorem ipsum dolor sit ame",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "",
    },
    {
      title: "Lorem ipsum dolor sit ame",
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    },
  ];

  return (
    <>
      <main className="max-w-7x1 mx-auto px-4 flex flex-col gap-4">
        <CandidatesProfileSection candidate={candidates[0]} />
        <StanceComparisonSection candidates={candidates} stances={stances} />
        <QuestionSection
          generalQuestions={generalQuestions}
          courseQuestions={courseQuestions}
        />
      </main>
    </>
  );
}

