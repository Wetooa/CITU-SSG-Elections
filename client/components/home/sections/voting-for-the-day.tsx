import { VotingCandidateCard } from "@/components/candidate-cards/voting-candidate-card";
import { fadeLeft } from "@/utils/animations";
import { PARTYLIST_TO_IMAGE } from "@/utils/consts";
import { Candidate } from "@/utils/types";
import { faRectangleList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function VotingForTheDaySection() {
  const votingForTheDayData: Candidate[] = [];
  return (
    <motion.section className="border rounded-lg p-4" variants={fadeLeft}>
      <div className="flex items-center gap-2 text-lg font-medium mb-2">
        <FontAwesomeIcon icon={faRectangleList} className="text-accent" />
        Voting for the day
      </div>

      <div className="space-y-2">
        {votingForTheDayData.map((candidate, index) => {
          const bgImage = PARTYLIST_TO_IMAGE[candidate.party_list];

          return (
            <VotingCandidateCard
              key={index}
              index={index}
              bgImage={bgImage}
              candidate={candidate}
              isPhotoLeft={false}
              showPosition={true}
              isLongCard={false}
            />
          );
        })}
      </div>
    </motion.section>
  );
}
