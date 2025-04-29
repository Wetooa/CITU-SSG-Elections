'use client'
import CountdownSection from '@/components/home/sections/countdown'
import { VotesCastSection } from '@/components/stats/votes-cast'
import { fadeUp } from '@/utils/animations'
import { VOTING_DATE } from '@/utils/consts'
import { CandidateWithVotes } from '@/utils/types'
import { motion } from 'framer-motion'

const h2hVotesCastData: Record<string, CandidateWithVotes[]> = {
  President: [
    {
      name: 'Adrian Sajulga',
      votes: 1032,
      position: 'President',
      partyList: 'Just',
    },
    {
      name: 'Adrian Sajulga',
      votes: 576,
      position: 'President',
      partyList: 'United',
    },
  ],
  'Vice-President': [
    {
      name: 'Adrian Sajulga',
      votes: 986,
      position: 'Vice-President',
      partyList: 'Just',
    },
  ],
  Secretary: [
    {
      name: 'Adrian Sajulga',
      votes: 400,
      position: 'Secretary',
      partyList: 'Just',
    },
    {
      name: 'Adrian Sajulga',
      votes: 892,
      position: 'Secretary',
      partyList: 'United',
    },
  ],
}

export default function StatsPage() {
  const dateToday = new Date()
  const targetDate = VOTING_DATE
  const hasVotingStarted = dateToday >= targetDate

  // override here
  // const hasVotingStarted = true

  return (
    <motion.div className="p-4 space-y-6" initial="initial" animate="animate" exit="exit">
      <motion.h1 className="text-3xl font-bold text-white" variants={fadeUp} transition={{ delay: 0.1 }}>
        Stats
      </motion.h1>

      <motion.div className="h-full min-h-96 place-content-center">
        {hasVotingStarted ? (
          <VotesCastSection data={h2hVotesCastData} />
        ) : (
          // i steal countdown section ty very much
          <CountdownSection />
        )}
      </motion.div>
    </motion.div>
  )
}
