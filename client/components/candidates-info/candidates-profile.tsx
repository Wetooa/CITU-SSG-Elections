import { getCandidateImage } from "@/lib/utils";
import { fadeLeft } from "@/utils/animations";
import { PARTYLIST_TO_ICON, PARTYLIST_TO_IMAGE } from "@/utils/consts";
import { CandidateProfile } from "@/utils/types";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { BaseCandidateCard } from "../candidate-cards/base-candidate-card";
import Image from "next/image";
import SocialLinks from "./social-links";

export default function CandidatesProfileSection({
  candidate,
}: {
  candidate: CandidateProfile;
}) {
  const bgImage = PARTYLIST_TO_IMAGE[candidate.party_list];
  const partyListIcon = PARTYLIST_TO_ICON[candidate.party_list];
  const candidateImage = getCandidateImage(candidate.name);

  return (
    <motion.section
      className="border overflow-hidden border-red-500 rounded-lg p-4 bg-[#2A0F0F] text-white flex flex-col justify-center relative"
      variants={fadeLeft}
    >
      {/* Header */}
      <div className="flex items-center gap-2 text-lg font-medium mb-4">
        <FontAwesomeIcon icon={faUser} className="text-accent" />
        Candidate Profile
      </div>

      {/* Profile Container */}
      <div
        className="flex flex-col lg:flex-row justify-between items-center gap-6 rounded-lg w-full"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Info and Banner */}
        <div className="w-full p-6 rounded-md text-white relative sm:min-h-72">
          <div className="flex items-center sm:gap-4">

            {/* Partylist Number */}
            {/* <div className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[40px] font-sans font-medium text-white">
              #{candidate.partyListNumber}
            </div> */}

            {/* Red Separator Line */}
            {/* <div className="w-[1px] h-6 bg-[#EF4444]" /> */}

            {/* Partylist Icon */}
            <Image
              src={partyListIcon}
              width={128}
              height={128}
              alt="Partylist"
              className="sm:h-6 md:h-8 lg:h-9 xl:h-10"
            />
          </div>

          <div className="text-4xl sm:text-6xl lg:text-[96px] xl:text-[120px] leading-[0.9] font-bebas font-normal mt-2 max-w-[70%] break-words">
            {candidate.name.toUpperCase()}
          </div>

          <div className="italic text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mt-2 font-sans font-normal">
            For {candidate.position}
          </div>

          {/* Socials */}
          <SocialLinks socials={candidate.social_media} />
        </div>

        {/* Candidate Image */}
        <Image
            src={candidateImage}
            width={340}
            height={340}
            alt={`${candidate.name}`}
            className="w-96 h-full"
        />

      </div>


    </motion.section>
  )
}

// className="absolute right-0 
// sm:h-auto sm:w-84 sm:-bottom-36
// md:h-auto md:w-84 md:-bottom-36 
// lg:h-auto lg:w-84 lg:-bottom-36 
// w-64 -bottom-24"
