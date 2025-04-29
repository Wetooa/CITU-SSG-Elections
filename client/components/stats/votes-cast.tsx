'use client'

import { fadeDown } from '@/utils/animations'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { VotesCastRow } from './votes-cast-row'
import type { Candidate } from '@/utils/types'

interface VotesCastSectionProps {
  data: Record<string, Candidate[]>
}

export const VotesCastSection = ({ data }: VotesCastSectionProps) => {
  return (
    <>
      <motion.section className="relative border rounded-xl p-2 sm:p-4 overflow-hidden" variants={fadeDown}>
        {/* TODO: port hardcoded values to globals or smthn*/}
        <div className="absolute inset-0 bg-gradient-to-bl from-[#FF6969] to-[#18181B] opacity-10 pointer-events-none" />

        <div className="relative z-10 h-full w-full">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
            <FontAwesomeIcon icon={faPrint} className="text-accent" />
            <h2 className="text-lg font-medium">Votes Cast</h2>
          </div>

          {Object.keys(data).length > 0 ? (
            <div className="flex flex-col gap-4">
              {Object.keys(data).map((position, index) => (
                <VotesCastRow key={index} position={position} candidates={data[position]} index={index} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-40 text-gray-400">No voting data available yet</div>
          )}
        </div>
      </motion.section>
    </>
  )
}
