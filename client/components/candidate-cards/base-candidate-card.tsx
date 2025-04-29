"use client";

import { motion } from "framer-motion";
import ImageDiv from "../utils/image-div";
import { Candidate } from "@/utils/types";
import { fadeUp } from "@/utils/animations";
import Image from "next/image";
import {
  CANDIDATE_TO_IMAGE,
  PARTYLIST_TO_ICON,
  PARTYLIST_TO_IMAGE,
} from "@/utils/consts";
import Link from "next/link";

interface BaseCandidateCardProps {
  index: number;
  candidate: Candidate;
}

export const BaseCandidateCard = ({
  index,
  candidate,
}: BaseCandidateCardProps) => {
  return (
    <motion.div variants={fadeUp} transition={{ delay: 0.1 + index * 0.1 }}>
      <Link href={`/candidates/${candidate.balota_number}`}>
        <ImageDiv
          bgImage={PARTYLIST_TO_IMAGE[candidate.party_list]}
          className="flex gap-4 px-4 items-center"
        >
          <>
            <Image
              src={CANDIDATE_TO_IMAGE[candidate.name]}
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
              src={PARTYLIST_TO_ICON[candidate.party_list]}
              alt={candidate.party_list}
              width={100}
              height={100}
            />
          </>
        </ImageDiv>
      </Link>
    </motion.div>
  );
};
