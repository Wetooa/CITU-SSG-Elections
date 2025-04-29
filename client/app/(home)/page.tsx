"use client";

import CountdownSection from '@/components/home/sections/countdown'
import ElectionTimelineSection from '@/components/home/sections/election-timeline'
import LatestNewsSection from '@/components/home/sections/latest-news'
import { fadeUp } from '@/utils/animations'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <motion.div className="space-y-6" initial="initial" animate="animate" variants={fadeUp}>
      <motion.h1 className="text-3xl font-bold text-white mb-6" variants={fadeUp}>
        Home
      </motion.h1>

      <div className="flex flex-col gap-4 flex-1">
        <CountdownSection />
        <ElectionTimelineSection />
        <LatestNewsSection />
      </div>
    </motion.div>
  )
}
