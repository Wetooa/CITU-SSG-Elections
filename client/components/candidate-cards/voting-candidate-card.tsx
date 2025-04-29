"use client";

import { getCandidateImage } from "@/lib/utils";
import { PARTYLIST_TO_ICON } from "@/utils/consts";
import { Candidate } from "@/utils/types";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageDiv from "../utils/image-div";

interface CandidateCardProps {
  index: number;
  bgImage: string;
  candidate: Candidate;
  isLosing?: boolean; // used in h2h, showcases white votes bg if losing
  isPhotoLeft: boolean; // orientation determined by position of candidate's photo
  isLongCard: boolean; // for sole candidates with long row
  showPosition: boolean;
}

export const VotingCandidateCard = ({
  index,
  bgImage,
  candidate,
  isLosing,
  isPhotoLeft,
  isLongCard,
  showPosition,
}: CandidateCardProps) => {
  // will put as props
  const maxVotes = 2000;
  const turnoutPercentage = Math.min(
    Math.round((candidate.votes / maxVotes) * 100),
    100,
  );

  return (
    <motion.div
      key={index}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="w-full"
    >
      {/* Mobile Layout (Stacked) - only visible on small screens */}
      <div className="block sm:hidden">
        <ImageDiv
          bgImage={bgImage}
          className="relative overflow-hidden rounded-lg min-h-[160px]"
        >
          <div className="absolute inset-0 flex flex-col">
            {/* Top section with party icon */}
            <div className="flex justify-between items-start p-3">
              {!showPosition && (
                <Image
                  src={
                    PARTYLIST_TO_ICON[candidate.party_list] ||
                    "/placeholder.svg"
                  }
                  alt={candidate.party_list}
                  width={40}
                  height={40}
                  className="w-auto h-4"
                />
              )}
              {showPosition && (
                <p className="italic text-xs">For {candidate.position}</p>
              )}
            </div>

            {/* Bottom section with candidate info */}
            <div className="mt-auto p-3 pt-0 bg-gradient-to-t from-black/70 to-transparent">
              <p className="uppercase leading-tight m-0 text-2xl font-bebas">
                {candidate.name}
              </p>

              <div className="flex justify-between items-center mt-1">
                <p
                  className={`rounded-lg px-2 py-0.5 text-xs ${
                    isLosing ? "bg-white text-accent" : "bg-accent text-white"
                  }`}
                >
                  {candidate.votes} votes
                </p>
                <span className="text-xs">{turnoutPercentage}%</span>
              </div>

              <div className="w-full mt-1">
                <div className="w-full bg-gray-700 rounded-full h-1.5">
                  <div
                    className={`h-1.5 rounded-full ${isLosing ? "bg-white" : "bg-accent"}`}
                    style={{ width: `${turnoutPercentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Candidate image */}
            <Image
              src={getCandidateImage(candidate.name)}
              alt={candidate.name}
              width={120}
              height={120}
              className="absolute right-0 bottom-0 h-[140px] w-auto object-contain object-bottom"
            />
          </div>
        </ImageDiv>
      </div>

      {/* Desktop Layout - only visible on medium screens and up */}
      <div className="hidden sm:block">
        <ImageDiv
          bgImage={bgImage}
          className={`flex h-40 items-end justify-between ${isPhotoLeft && "flex-row-reverse"}`}
        >
          <>
            <div className={`p-4 ${isPhotoLeft && "place-items-end-safe"}`}>
              {!isLongCard && (
                <>
                  <p
                    className={`rounded-lg px-2 py-1 w-fit text-sm ${
                      isLosing ? "bg-white text-accent" : "bg-accent text-white"
                    }`}
                  >
                    {candidate.votes} votes
                  </p>
                  <p className="uppercase leading-normal m-0 text-3xl sm:text-4xl font-bebas">
                    {candidate.name}
                  </p>
                </>
              )}

              {showPosition ? (
                <p className="italic leading-normal text-xs">
                  For {candidate.position}
                </p>
              ) : (
                <Image
                  src={
                    PARTYLIST_TO_ICON[candidate.party_list] ||
                    "/placeholder.svg"
                  }
                  alt={candidate.party_list}
                  width={40}
                  height={40}
                  className={`w-auto ${isLongCard ? "h-12 mb-6" : "h-4"}`}
                />
              )}

              {!isLongCard && (
                <div className="w-full mt-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Voter Turnout</span>
                    <span>{turnoutPercentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div
                      className={`h-2.5 rounded-full ${isLosing ? "bg-white" : "bg-accent"}`}
                      style={{ width: `${turnoutPercentage}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex pt-4">
              <Image
                src={getCandidateImage(candidate.name)}
                alt={candidate.name}
                width={192}
                height={192}
                className={`absolute object-none h-80 w-auto -bottom-40 ${isPhotoLeft ? "left-0" : "right-0"}`}
              />

              {isLongCard && (
                <div className="p-4 ml-60">
                  <p
                    className={`rounded-lg px-2 py-1 w-fit ${
                      isLosing ? "bg-white text-accent" : "bg-accent text-white"
                    }`}
                  >
                    {candidate.votes} votes
                  </p>
                  <p className="uppercase leading-normal m-0 text-3xl sm:text-4xl font-bebas">
                    {candidate.name}
                  </p>

                  <div className="w-full mt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Voter Turnout</span>
                      <span>{turnoutPercentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full ${isLosing ? "bg-white" : "bg-accent"}`}
                        style={{ width: `${turnoutPercentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </>
        </ImageDiv>
      </div>
    </motion.div>
  );
};
