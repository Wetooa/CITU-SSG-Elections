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
import { useEffect, useState } from "react";

const candidatesData: Candidate[] = [
  {
    name: "Adrian Sajulga",
    position: "President",
    partyList: "United",
  },
  {
    name: "Adrian Sajulga",
    position: "Vice President",
    partyList: "Just",
  },
  {
    name: "Adrian Sajulga",
    position: "President",
    partyList: "United",
  },
  {
    name: "Adrian Sajulga",
    position: "Vice President",
    partyList: "Just",
  },
];

const ALL = "ALL";

export default function CandidatesPage() {
  // FIX: Add route here
  // const { data: candidatesData, isLoading } = useQuery({
  //   queryKey: ["candidatesData"],
  //   queryFn: async () => {
  //     const response = await fetch(`/api/leaderboard/`);
  //     const result = await response.json();
  //     return result.leaderboard as Record<string, []>;
  //   },
  // });

  const [candidates, setCandidates] = useState<Candidate[]>(candidatesData);

  const [selectedName, setSelectedName] = useState<string>(ALL);
  const [selectedPartyList, setSelectedPartyList] = useState<string>(ALL);
  const [selectedPosition, setSelectedPosition] = useState<string | null>(ALL);

  useEffect(() => {
    const filteredCandidates = candidatesData.filter((candidate) => {
      const matchesName =
        selectedName === ALL || candidate.name.includes(selectedName);

      const matchesPartyList =
        selectedPartyList === ALL || candidate.partyList === selectedPartyList;

      const matchesPosition =
        selectedPosition === ALL || candidate.position === selectedPosition;

      return matchesName && matchesPartyList && matchesPosition;
    });

    setCandidates(filteredCandidates);
  }, [selectedName, selectedPartyList, selectedPosition]);

  return (
    <motion.div
      className="p-4 space-y-6 w-full"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        className="flex w-full items-center justify-between"
        variants={fadeDown}
        transition={{ delay: 0.1 }}
      >
        <motion.h1 className="text-3xl font-bold text-white">
          Candidates
        </motion.h1>

        <section className="flex gap-4 mt-4">
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
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Partylist" />
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
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Position" />
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
          <div>smth</div>
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
