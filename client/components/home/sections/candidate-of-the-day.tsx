import ImageDiv from "@/components/utils/image-div";
import { fadeDown } from "@/utils/animations";
import { CANDIDATE_TO_IMAGE, PARTYLIST_TO_IMAGE } from "@/utils/consts";
import { CandidateWithVotes } from "@/utils/types";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CandidateOfTheDaySection() {
  const candidateOfTheDayData: CandidateWithVotes = {
    name: "Adrian Sajulga",
    votes: 120,
    position: "President",
    partyList: "United",
  };

  const {} = useQuery({
    queryKey: ["candidateOfTheDay"],
    queryFn: async () => {
      const response = await fetch(`/api/leaderboard/`);
      const result = await response.json();
      return result.leaderboard as Record<string, []>;
    },
  });

  return (
    <motion.section className="border rounded-lg p-4" variants={fadeDown}>
      <div className="flex items-center gap-2 text-lg font-medium mb-2">
        <FontAwesomeIcon icon={faStar} className="text-accent" />
        Candidate of the Day
      </div>

      <ImageDiv
        bgImage={PARTYLIST_TO_IMAGE[candidateOfTheDayData.partyList]}
        className="flex items-end justify-between"
      >
        <>
          <div className="space-y-1 p-4">
            <p className="uppercase leading-16 m-0 text-7xl font-bebas">
              {candidateOfTheDayData.name}
            </p>
            <p className="italic leading-normal text-sm">
              For {candidateOfTheDayData.position}
            </p>
          </div>

          <Image
            src={CANDIDATE_TO_IMAGE[candidateOfTheDayData.name]}
            alt={candidateOfTheDayData.name}
            width={100}
            height={100}
          />
        </>
      </ImageDiv>
    </motion.section>
  );
}
