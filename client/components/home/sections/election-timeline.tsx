'use client'

import { fadeRight } from '@/utils/animations'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import ElectionTimeline from '../timeline'

export default function ElectionTimelineSection() {
  return (
    <motion.section className="border rounded-lg p-4 relative overflow-hidden" variants={fadeRight}>
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background: 'linear-gradient(42.78deg, #18181B 25.42%, #FF6969 472.21%)',
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center gap-2 text-lg font-medium mb-4">
          <FontAwesomeIcon icon={faCalendarDays} className="text-[#FF6969]" />
          Election Timeline
        </div>

        <ElectionTimeline />
      </div>
    </motion.section>
  )
}
