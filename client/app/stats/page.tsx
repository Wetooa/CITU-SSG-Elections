"use client";
import CountdownSection from "@/components/home/sections/countdown";
import { VotesCastSection } from "@/components/stats/votes-cast";
import { fadeUp } from "@/utils/animations";
import { VOTING_DATE } from "@/utils/consts";
import { Candidate } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";

// const h2hVotesCastData: Record<string, Candidate[]> = {
//   President: [
//     {
//       name: "Adrian Sajulga",
//       votes: 1032,
//       position: "President",
//       party_list: "Just",
//     },
//     {
//       name: "Adrian Sajulga",
//       votes: 576,
//       position: "President",
//       party_list: "United",
//     },
//   ],
//   "Vice-President": [
//     {
//       name: "Adrian Sajulga",
//       votes: 986,
//       position: "Vice-President",
//       partyList: "Just",
//     },
//   ],
//   Secretary: [
//     {
//       name: "Adrian Sajulga",
//       votes: 400,
//       position: "Secretary",
//       partyList: "Just",
//     },
//     {
//       name: "Adrian Sajulga",
//       votes: 892,
//       position: "Secretary",
//       partyList: "United",
//     },
//   ],
// };

export default function StatsPage() {
  const NEXT_PUBLIC_SERVER_LINK = process.env.NEXT_PUBLIC_SERVER_LINK;

  const { data: candidatesData, isLoading } = useQuery({
    queryKey: ["candidatesData"],
    queryFn: async () => {
      const response = await fetch(`${NEXT_PUBLIC_SERVER_LINK}/candidates`);
      const result = await response.json();
      return result as Candidate[];
    },
  });

  const h2hVotesCastData: Record<string, Candidate[]> = {};

  candidatesData?.forEach((candidate: Candidate) => {
    if (!h2hVotesCastData[candidate.position]) {
      h2hVotesCastData[candidate.position] = [];
    }
    h2hVotesCastData[candidate.position].push(candidate);
  });

  const dateToday = new Date();
  const targetDate = VOTING_DATE;
  const hasVotingStarted = dateToday >= targetDate;

  // override here
  // const hasVotingStarted = true;

  return (
    <motion.div
      className="p-4 space-y-6"
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.h1
        className="text-3xl font-bold text-white"
        variants={fadeUp}
        transition={{ delay: 0.1 }}
      >
        Stats
      </motion.h1>

      <motion.div className="h-full min-h-96 place-content-center">
        {hasVotingStarted || isLoading ? (
          <VotesCastSection data={h2hVotesCastData} />
        ) : (
          // i steal countdown section ty very much
          <CountdownSection />
        )}
      </motion.div>
    </motion.div>
  );
}
