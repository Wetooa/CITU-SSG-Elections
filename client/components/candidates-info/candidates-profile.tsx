import ImageDiv from "@/components/utils/image-div";
import { fadeLeft } from "@/utils/animations";
import { CANDIDATE_TO_IMAGE, PARTYLIST_TO_ICON, PARTYLIST_TO_IMAGE } from "@/utils/consts";
import { CandidateProfile } from "@/utils/types";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faInstagram,
    faTiktok,
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CandidatesProfileSection() {
  const candidate: CandidateProfile = {
    name: "Adrian Sajulga",
    position: "Vice-President",
    partyList: "United",
    partyListNumber: 32,
    socials: {
      facebook: "adrian.sajulga",
      instagram: "adrian.sajulga",
      tiktok: "adrian.sajulga",
    },
  };

  const bgImage = PARTYLIST_TO_IMAGE[candidate.partyList];
  const partyListIcon = PARTYLIST_TO_ICON[candidate.partyList];
  const candidateImage = CANDIDATE_TO_IMAGE[candidate.name];

  return (
    <motion.section
      className="border border-red-500 rounded-lg p-4 bg-[#2A0F0F] text-white flex flex-col justify-center relative"
      variants={fadeLeft}
    >
      {/* Header */}
      <div className="flex items-center gap-2 text-lg font-medium mb-4">
        <FontAwesomeIcon icon={faUser} className="text-red-400" />
        Candidate Profile
      </div>

      {/* Profile Container */}
      <div className="flex flex-col h-full lg:flex-row justify-between items-center gap-6 rounded-lg "
        style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            }}>
        {/* Info and Banner */}
        <div className="w-full p-6 rounded-md text-white">
            <div className="flex items-center gap-4">
                {/* Partylist Number */}
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] xl:text-[40px] font-sans font-medium text-white">
                    #{candidate.partyListNumber}
                </div>

                {/* Red Separator Line */}
                <div className="w-[1px] h-6 bg-[#EF4444]" />

                {/* Partylist Icon */}
                <img
                    src={partyListIcon}
                    alt="Partylist"
                    className="h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10"
                />
            </div>

            <div className="text-4xl sm:text-6xl lg:text-[96px] xl:text-[120px] leading-[0.9] font-bebas font-normal mt-2">
                {candidate.name.toUpperCase()}
            </div>
            
            <div className="italic text-sm sm:text-base md:text-lg lg:text-xl xl:text-[24px] mt-2 font-sans font-normal">
                For {candidate.position}
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-4">
                {candidate.socials?.facebook &&(
                    <a href={`https://facebook.com/${candidate.socials.facebook}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="text-white-500 text-xl hover:scale-110 transition-transform" />
                    </a>
                )}

                {candidate.socials?.instagram &&(
                    <a href={`https://instagram.com/${candidate.socials.instagram}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram}  className="text-white-500 text-xl hover:scale-110 transition-transform" />
                    </a>
                )}

                {candidate.socials?.tiktok &&(
                    <a href={`https://tiktok.com/${candidate.socials.tiktok}`} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTiktok} className="text-white-500 text-xl hover:scale-110 transition-transform" />
                    </a>
                )}
            </div>
        </div>
      </div>

      {/* Image */}
      <img src={candidateImage} alt={`${candidate.name}`} 
      className="absolute bottom-0 right-0 max-h-full h-[90%] sm:h-[85%] md:h-[80%] lg:h-[90%] xl:h-[95%] object-contain px-2"/>
    </motion.section>
  );
}
