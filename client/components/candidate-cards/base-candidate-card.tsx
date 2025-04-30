"use client";

import { getCandidateImage } from "@/lib/utils";
import { fadeUp } from "@/utils/animations";
import { PARTYLIST_TO_ICON, PARTYLIST_TO_IMAGE } from "@/utils/consts";
import { Candidate } from "@/utils/types";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ImageDiv from "../utils/image-div";

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
          className="flex md:gap-4 px-4 items-center h-40"
        >
          <>
            <div className="w-40">
              <Image
                src={getCandidateImage(candidate.name)}
                alt={candidate.name}
                width={256}
                height={256}
                className="object-fill scale-150 mt-24"
              />
            </div>

            <div className="flex md:flex-row flex-col w-full items-end justify-between">
              <div className="space-y-1">
                <h1 className="text-base md:text-3xl font-bold">
                  {candidate.name}
                </h1>
                <p className="italic text-xs md:text-sm">
                  For {candidate.position}
                </p>
              </div>

              <Image
                className="md:w-36 w-16 h-auto mt-8 md:mt-0"
                src={PARTYLIST_TO_ICON[candidate.party_list]}
                alt={candidate.party_list}
                width={100}
                height={100}
              />
            </div>
          </>
        </ImageDiv>
      </Link>
    </motion.div>
  );
};
