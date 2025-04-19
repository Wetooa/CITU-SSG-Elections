"use client";

import ImageDiv from "@/components/utils/image-div";
import {
  CANDIDATE_TO_IMAGE,
  PARTYLIST_TO_ICON,
  PARTYLIST_TO_IMAGE,
} from "@/utils/consts";
import { Candidate } from "@/utils/types";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/animations"; // assuming you've created this

export default function CandidatesPage() {
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
        Candidates
      </motion.h1>

      <motion.div
        className="border p-4 rounded-lg space-y-2"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {candidatesData.map((candidate, index) => {
          const candidateImage = CANDIDATE_TO_IMAGE[candidate.name];
          const bgImage = PARTYLIST_TO_IMAGE[candidate.partyList];
          const partyListIcon = PARTYLIST_TO_ICON[candidate.partyList];

          return (
            <motion.div
              key={index}
              variants={fadeUp}
              transition={{ delay: 0.1 + index * 0.1 }}
            >
              <ImageDiv
                bgImage={bgImage}
                className="flex gap-4 px-4 items-center"
              >
                <>
                  <Image
                    src={candidateImage}
                    alt={candidate.name}
                    width={100}
                    height={100}
                  />

                  <div className="space-y-1">
                    <h1 className="text-3xl font-bold">{candidate.name}</h1>
                    <p className="italic text-sm">For {candidate.position}</p>
                  </div>

                  <Image
                    className="ml-auto"
                    src={partyListIcon}
                    alt={candidate.partyList}
                    width={100}
                    height={100}
                  />
                </>
              </ImageDiv>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
