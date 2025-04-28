'use client'

import { Candidate } from '@/utils/types'
import { motion } from 'framer-motion'
import { fadeUp } from '@/utils/animations' // assuming you've created this
import { BaseCandidateCard } from '@/components/candidate-cards/base-candidate-card'

export default function CandidatesPage() {
  const candidatesData: Candidate[] = [
    {
      name: 'Adrian Sajulga',
      position: 'President',
      partyList: 'United',
    },
    {
      name: 'Adrian Sajulga',
      position: 'Vice President',
      partyList: 'Just',
    },
    {
      name: 'Adrian Sajulga',
      position: 'President',
      partyList: 'United',
    },
    {
      name: 'Adrian Sajulga',
      position: 'Vice President',
      partyList: 'Just',
    },
  ]

  return (
    <motion.div className="p-4 space-y-6" initial="initial" animate="animate" exit="exit">
      <motion.h1 className="text-3xl font-bold text-white" variants={fadeUp} transition={{ delay: 0.1 }}>
        Candidates
      </motion.h1>

      <motion.div className="border p-4 rounded-lg space-y-2" initial="initial" animate="animate" exit="exit">
        {candidatesData.map((candidate, index) => (
          <BaseCandidateCard key={index} index={index} candidate={candidate} />
        ))}
      </motion.div>
    </motion.div>
  )
}
