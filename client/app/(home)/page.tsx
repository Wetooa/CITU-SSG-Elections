'use client'

import CandidateOfTheDaySection from '@/components/home/sections/candidate-of-the-day'
import CountdownSection from '@/components/home/sections/countdown'
import ElectionTimelineSection from '@/components/home/sections/election-timeline'
import LatestNewsSection from '@/components/home/sections/latest-news'
import LeaderboardForEngagementSection from '@/components/home/sections/leaderboard-for-engagement'
import VotingForTheDaySection from '@/components/home/sections/voting-for-the-day'
import { fadeUp } from '@/utils/animations'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <motion.div className="space-y-6" initial="initial" animate="animate" variants={fadeUp}>
      <motion.h1 className="text-3xl font-bold text-white mb-6" variants={fadeUp}>
        Home
      </motion.h1>

      <div className="flex gap-6 w-full">
        {/* Left Column */}
        <div className="flex flex-col gap-4 flex-1">
          <CountdownSection />
          <VotingForTheDaySection />
          <LatestNewsSection />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 flex-1">
          <CandidateOfTheDaySection />
          <ElectionTimelineSection />
          <LeaderboardForEngagementSection />
        </div>
      </div>
    </motion.div>
  )
}
