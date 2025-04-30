"use client";

import { BaseCandidateCard } from "@/components/candidate-cards/base-candidate-card";
import { fadeDown } from "@/utils/animations"; // assuming you've created this
import { Candidate } from "@/utils/types";
import { motion } from "framer-motion";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { POSITIONS_LIST } from "@/utils/consts";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";

const ALL = "ALL";

export default function CandidatesPage() {
  const NEXT_PUBLIC_SERVER_LINK = process.env.NEXT_PUBLIC_SERVER_LINK;

  const { data: candidatesData, isLoading } = useQuery({
    queryKey: ["candidatesData"],
    queryFn: async () => {
      const response = await fetch(`${NEXT_PUBLIC_SERVER_LINK}/candidates`);
      const result = await response.json();
      return result as Candidate[];
    },
  });

  const [candidates, setCandidates] = useState<Candidate[]>([]);

  const [selectedName, setSelectedName] = useState<string>(ALL);
  const [selectedPartyList, setSelectedPartyList] = useState<string>(ALL);
  const [selectedPosition, setSelectedPosition] = useState<string | null>(ALL);

  useEffect(() => {
    if (!candidatesData || isLoading) return;

    const filteredCandidates = candidatesData.filter((candidate) => {
      const matchesName =
        selectedName === ALL ||
        candidate.name.toLowerCase().includes(selectedName.toLowerCase());

      const matchesPartyList =
        selectedPartyList === ALL || candidate.party_list === selectedPartyList;

      const matchesPosition =
        selectedPosition === ALL || candidate.position === selectedPosition;

      return matchesName && matchesPartyList && matchesPosition;
    });

    setCandidates(filteredCandidates);
  }, [
    candidatesData,
    isLoading,
    selectedName,
    selectedPartyList,
    selectedPosition,
  ]);

  return (
    <motion.div
      className="p-4 space-y-6 w-full"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="flex md:flex-row flex-col w-full items-center justify-between"
        variants={fadeDown}
        transition={{ delay: 0.1 }}
      >
        <motion.h1 className="text-3xl font-bold text-white">
          Candidates
        </motion.h1>

        <section className="flex md:flex-row flex-col gap-4 mt-4 w-full md:justify-end">
          <div>
            <Input
              onChange={(e) => {
                setSelectedName(e.target.value);
              }}
              placeholder="Name"
            />
          </div>

          <div>
            <Select onValueChange={setSelectedPosition}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>All</SelectItem>
                {POSITIONS_LIST.map((position) => {
                  return (
                    <SelectItem key={position} value={position}>
                      {position}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Select onValueChange={setSelectedPartyList}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Partylist" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={ALL}>All</SelectItem>
                <SelectItem value="United">United</SelectItem>
                <SelectItem value="Just">Just</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>
      </motion.div>

      <motion.div
        className="border p-4 rounded-lg space-y-2"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {candidates.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 text-center text-muted-foreground">
            <Image
              src="/empty-state.svg"
              alt="No results"
              className="w-32 h-32 mb-4 opacity-70"
              width={128}
              height={128}
            />
            <p className="text-lg font-medium">No candidates found</p>
            <p className="text-sm text-muted-foreground">
              Try adjusting your filters or search keywords.
            </p>
          </div>
        ) : (
          candidates.map((candidate, index) => (
            <BaseCandidateCard
              key={index}
              index={index}
              candidate={candidate}
            />
          ))
        )}
      </motion.div>
    </motion.div>
  );
}
