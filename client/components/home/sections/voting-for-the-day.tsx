import ImageDiv from "@/components/utils/image-div";
import { fadeLeft } from "@/utils/animations";
import { CANDIDATE_TO_IMAGE, PARTYLIST_TO_IMAGE } from "@/utils/consts";
import { CandidateWithVotes } from "@/utils/types";
import { faRectangleList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";

export default function VotingForTheDaySection() {
  const votingForTheDayData: CandidateWithVotes[] = [
    {
      name: "Adrian Sajulga",
      votes: 120,
      position: "President",
      partyList: "United",
    },
    {
      name: "Adrian Sajulga",
      votes: 120,
      position: "President",
      partyList: "Just",
    },
    {
      name: "Adrian Sajulga",
      votes: 120,
      position: "President",
      partyList: "United",
    },
  ];

  return (
    <motion.section className="border rounded-lg p-4" variants={fadeLeft}>
      <div className="flex items-center gap-2 text-lg font-medium mb-2">
        <FontAwesomeIcon icon={faRectangleList} className="text-accent" />
        Voting for the day
      </div>

      <div className="space-y-2">
        {votingForTheDayData.map((candidate, index) => {
          const bgImage = PARTYLIST_TO_IMAGE[candidate.partyList];

          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ImageDiv
                bgImage={bgImage}
                className="flex items-end justify-between"
              >
                <>
                  <div className="space-y-1 p-4">
                    <p className="rounded-lg bg-accent px-2 py-1 w-fit">
                      {candidate.votes} votes
                    </p>
                    <p className="uppercase leading-normal m-0 text-4xl font-bebas">
                      {candidate.name}
                    </p>
                    <p className="italic leading-normal text-sm">
                      For {candidate.position}
                    </p>
                  </div>

                  <Image
                    src={CANDIDATE_TO_IMAGE[candidate.name]}
                    alt={candidate.name}
                    width={100}
                    height={100}
                  />
                </>
              </ImageDiv>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
