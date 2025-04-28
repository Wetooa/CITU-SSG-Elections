'use client'
import { fadeUp } from '@/utils/animations'
import { motion } from 'framer-motion'

export default function FAQPage() {
  return (
    <motion.div className="p-4 space-y-6" initial="initial" animate="animate" exit="exit">
      <motion.h1 className="text-3xl font-bold text-white" variants={fadeUp} transition={{ delay: 0.1 }}>
        Frequently Asked Questions (FAQ)
      </motion.h1>

      <motion.div></motion.div>
    </motion.div>
  )
}
