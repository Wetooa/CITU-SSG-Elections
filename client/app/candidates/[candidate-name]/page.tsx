"use client";

import Link from 'next/link';
import {
    CANDIDATE_TO_IMAGE,
    PARTYLIST_TO_ICON,
    PARTYLIST_TO_IMAGE,
  } from "@/utils/consts";
import CandidatesProfileSection from '@/components/candidates-info/candidates-profile';

export default function CandidatePage() {
    return (
        <>
            <main className="max-w-7x1 mx-auto px-4">         
                <CandidatesProfileSection />   
            </main>
        </>
    );
}