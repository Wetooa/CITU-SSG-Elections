'use client'

import { fadeDown } from '@/utils/animations'
import { CandidateWithVotes } from '@/utils/types'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { VotesCastRow } from './votes-cast-row'

interface VotesCastSectionProps {
  data: Record<string, CandidateWithVotes[]>
}

export const VotesCastSection = ({ data }: VotesCastSectionProps) => {
  return (
    <>
      <motion.section className="relative border rounded-xl p-4 overflow-hidden" variants={fadeDown}>
        {/* TODO: port hardcoded values to globals or smthn*/}
        <div className="absolute inset-0 bg-gradient-to-bl from-[#FF6969] to-[#18181B] opacity-10 pointer-events-none" />

        <div className="relative z-10">
          <div className=" flex items-center gap-2 mb-2">
            <FontAwesomeIcon icon={faPrint} className="text-accent" />
            <h2 className="text-lg font-medium">Votes Cast</h2>
          </div>
          <div className="flex flex-col gap-2">
            {Object.keys(data).map((position, index) => (
              <VotesCastRow key={index} position={position} candidates={data[position]} index={index} />
            ))}
          </div>
        </div>
      </motion.section>
    </>
  )
}
