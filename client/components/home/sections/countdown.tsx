import { fadeDown } from '@/utils/animations'
import { faHourglass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { CountdownTimer } from '../countdown-timer'
import { VOTING_DATE } from '@/utils/consts'

export default function CountdownSection() {
  const targetDate = VOTING_DATE

  return (
    <motion.section className="border rounded-lg bg-gradient-to-br from-[#EF4444] to-[#340A0A] p-4" variants={fadeDown}>
      <div className="flex items-center gap-2 text-lg font-medium mb-2">
        <FontAwesomeIcon icon={faHourglass} />
        Voting starts in
      </div>
      <CountdownTimer time={targetDate} />
    </motion.section>
  )
}
