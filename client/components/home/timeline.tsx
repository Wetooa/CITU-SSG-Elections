'use client'

import { motion } from 'framer-motion'

interface StageItem {
  label: string
  date: Date
  isActive: boolean
}

const stages: StageItem[] = [
  { label: 'Filing', date: new Date('4/20/2025'), isActive: true },
  { label: 'Campaign', date: new Date('4/23/2025'), isActive: true },
  { label: 'Debate', date: new Date('4/27/2025'), isActive: true },
  { label: 'Voting', date: new Date('4/30/2025'), isActive: true },
]

export default function ElectionTimeline() {
  const dateToday = new Date()

  return (
    <div className="py-2">
      <div className="flex justify-between mb-2 px-2">
        {stages.map((stage, index) => (
          <div key={`date-${index}`} className="text-center w-1/4">
            <span className={`text-sm ${dateToday > stage.date ? 'text-[#FF6969]' : 'text-neutral-400'}`}>
              {stage.date.toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>

      <div className="relative flex items-center justify-between px-2">
        <div className="absolute left-20 right-14 h-0.5 bg-[#FF6969]/30 top-1/2 transform -translate-3 z-0"></div>

        {stages.map((stage, index) => (
          <motion.div
            key={`circle-${index}`}
            className="z-10 flex flex-col items-center w-1/4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div
              className={`w-6 h-6 rounded-full border-2 flex items-center justify-center
                ${dateToday > stage.date ? 'bg-[#FF6969] border-[#FF6969]' : 'bg-neutral-400 border-neutral-400'}`}
            ></div>

            <span
              className={`mt-2 text-sm text-center ${dateToday > stage.date ? 'text-[#FF6969]' : 'text-neutral-300'}`}
            >
              {stage.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
