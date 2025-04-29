import ImageDiv from "@/components/utils/image-div";
import { getCandidateImage } from "@/lib/utils";
import { fadeUp } from "@/utils/animations";
import { PARTYLIST_TO_IMAGE, CANDIDATE_TO_IMAGE } from "@/utils/consts";
import { Leaderboard } from "@/utils/types";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LeaderboardForEngagementSection() {
  const leaderboardData: Leaderboard[] = [
    {
      name: "Adrian Sajulga",
      position: "President",
      party_list: "United",
      award: "Most Viewed",
      votes: 0,
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
    },
    {
      name: "Adrian Sajulga",
      position: "President",
      party_list: "United",
      award: "Most Viewed",
      votes: 0,
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
    },
  ];

  // FIX: Add route here
  // const { data: candidatesData, isLoading } = useQuery({
  //   queryKey: ["candidatesData"],
  //   queryFn: async () => {
  //     const response = await fetch(`/api/leaderboard/`);
  //     const result = await response.json();
  //     return result.leaderboard as Record<string, []>;
  //   },
  // });

  return (
    <motion.section className="border rounded-lg p-4" variants={fadeUp}>
      <div className="flex items-center gap-2 text-lg font-medium mb-4 text-white">
        <FontAwesomeIcon icon={faFire} className="text-accent" />
        Leaderboard for Engagement
      </div>

      <div className="flex gap-4 overflow-x-auto pb-2">
        {leaderboardData.map((candidate, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <ImageDiv
              bgImage={PARTYLIST_TO_IMAGE[candidate.party_list]}
              className="flex items-end justify-between"
            >
              <>
                <div className="space-y-1 p-2">
                  <p className="rounded bg-white text-accent text-xs px-2 py-1 w-fit font-semibold">
                    {candidate.award}
                  </p>
                  <p className="uppercase text-white text-3xl font-bebas">
                    {candidate.name}
                  </p>
                  <p className="italic text-white text-sm">
                    For {candidate.position}
                  </p>
                </div>

                <Image
                  src={getCandidateImage(candidate.name)}
                  alt={candidate.name}
                  width={80}
                  height={80}
                />
              </>
            </ImageDiv>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
