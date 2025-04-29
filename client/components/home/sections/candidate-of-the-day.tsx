import ImageDiv from "@/components/utils/image-div";
import { getCandidateImage } from "@/lib/utils";
import { fadeDown } from "@/utils/animations";
import { PARTYLIST_TO_IMAGE } from "@/utils/consts";
import { Candidate } from "@/utils/types";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CandidateOfTheDaySection() {
  const candidateOfTheDayData: Candidate = {
    name: "Adrian Sajulga",
    votes: 120,
    position: "President",
    party_list: "United",
    balota_number: 0,
    social_media: {
      facebook: "",
      instagram: "",
      tiktok: "",
    },
    stances: {
      tuition_increase: false,
      facility_expansion: false,
      parking_space: false,
      SSG_fee: false,
      mental_health: false,
      cats_in_campus: false,
      AI_use: false,
      campus_press_freedom: false,
      student_activism: false,
      duterte_arrest: false,
      political_dynasties: false,
      sara_impeachment: false,
      legal_divorse: false,
      legal_abortion: false,
      equality_bill: false,
      same_sex_marriage: false,
      pro_palestine: false,
      press_freedom: false,
    },
  };

  // FIX: Add route here
  // const { data: candidatesOfTheDayData, isLoading } = useQuery({
  //   queryKey: ["candidatesOfTheDayData"],
  //   queryFn: async () => {
  //     const response = await fetch(`/api/leaderboard/`);
  //     const result = await response.json();
  //     return result.leaderboard as Record<string, []>;
  //   },
  // });

  return (
    <motion.section className="border rounded-lg p-4" variants={fadeDown}>
      <div className="flex items-center gap-2 text-lg font-medium mb-2">
        <FontAwesomeIcon icon={faStar} className="text-accent" />
        Candidate of the Day
      </div>

      <ImageDiv
        bgImage={PARTYLIST_TO_IMAGE[candidateOfTheDayData.party_list]}
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
            src={getCandidateImage(candidateOfTheDayData.name)}
            alt={candidateOfTheDayData.name}
            width={100}
            height={100}
          />
        </>
      </ImageDiv>
    </motion.section>
  );
}
