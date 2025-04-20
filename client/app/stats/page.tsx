'use client'
import VotingForTheDaySection from '@/components/home/sections/voting-for-the-day'
import { TopViewedCandidateSection } from '@/components/stats/top-viewed-candidates'
import { VotesCastSection } from '@/components/stats/votes-cast'
import { fadeUp } from '@/utils/animations'
import { CandidateWithViews, CandidateWithVotes } from '@/utils/types'
import { motion } from 'framer-motion'

export default function StatsPage() {
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
      {
        name: 'Adrian Sajulga',
        votes: 762,
        position: 'Vice-President',
        partyList: 'United',
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

  const viewsData: CandidateWithViews[] = [
    {
      name: 'Adrian Sajulga',
      position: 'President',
      partyList: 'United',
      views: 412,
    },
    {
      name: 'Adrian Sajulga',
      position: 'President',
      partyList: 'United',
      views: 235,
    },
    {
      name: 'Adrian Sajulga',
      position: 'President',
      partyList: 'United',
      views: 146,
    },
  ]

  return (
    <motion.div className="p-4 space-y-6" initial="initial" animate="animate" exit="exit">
      <motion.h1 className="text-3xl font-bold text-white" variants={fadeUp} transition={{ delay: 0.1 }}>
        Stats
      </motion.h1>
      <VotesCastSection data={h2hVotesCastData} />
      <motion.div className="grid grid-cols-2 gap-8">
        <TopViewedCandidateSection data={viewsData} />
        <VotingForTheDaySection />
      </motion.div>
    </motion.div>
  )
}
