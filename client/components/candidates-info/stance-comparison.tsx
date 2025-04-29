import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScaleBalanced,
  faCheck,
  faTimes,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { fadeLeft } from "@/utils/animations";
import { Stance } from "@/utils/types";
import { StanceValue } from "@/utils/types";

interface CandidateProfile {
  name: string;
}

interface StanceComparisonProps {
  candidate: CandidateProfile;
  stances: Stance[];
}

const stanceIcons = {
  yes: <FontAwesomeIcon icon={faCheck} className="text-green-400" />,
  no: <FontAwesomeIcon icon={faTimes} className="text-red-400" />,
  abstain: <FontAwesomeIcon icon={faMinus} className="text-gray-400" />,
};

const StanceComparison: React.FC<StanceComparisonProps> = ({
  candidate,
  stances,
}) => {
  const candidates: CandidateProfile[] = [candidate];

  return (
    <motion.section
      className="border overflow-hidden border-red-500 rounded-lg p-4 bg-[#2A0F0F] text-white flex flex-col justify-center relative"
      variants={fadeLeft}
    >
      {/* Header */}
      <div className="flex items-center gap-2 text-lg font-medium mb-4">
        <FontAwesomeIcon icon={faScaleBalanced} className="text-accent" />
        Stances
      </div>

      <div
        className={`grid`}
        style={{
          gridTemplateColumns: `auto repeat(${candidates.length}, 1fr)`,
          gridTemplateRows: `auto repeat(${stances.length}, auto)`,
          gap: "1rem",
        }}
      >
        {/* Candidate Name Headers */}
        <div /> {/* top-left empty cell */}
        {candidates.map((c) => (
          <div key={c.name} className="text-center font-medium text-white">
            {c.name}
          </div>
        ))}
        {/* Stance Rows */}
        {stances.map(({ emoji, label, ...stancesFor }) => (
          <React.Fragment key={label}>
            {/* Stance label column */}
            <div className="flex items-center gap-2 text-white">
              <span>{emoji}</span>
              <span>{label}</span>
            </div>

            {/* Candidate stances */}
            {candidates.map((c) => (
              <div key={c.name + label} className="flex justify-center">
                {stanceIcons[stancesFor[c.name] as StanceValue]}
              </div>
            ))}
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  );
};

export default StanceComparison;
