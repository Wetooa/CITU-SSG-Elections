'use client'
import { CANDIDATE_TO_IMAGE, PARTYLIST_TO_IMAGE } from '@/utils/consts'
import ImageDiv from '../utils/image-div'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fadeUp } from '@/utils/animations'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { CandidateWithViews } from '@/utils/types'
import useMeasure from 'react-use-measure'

interface TopViewedCandidatesProps {
  data: CandidateWithViews[]
}

export const TopViewedCandidateSection = ({ data }: TopViewedCandidatesProps) => {
  const [ref, { width }] = useMeasure()
  const extendedData = [...data, ...data]

  return (
    <motion.section className="border rounded-lg p-4 h-fit overflow-hidden" variants={fadeUp}>
      <div className="flex items-center gap-2 text-lg font-medium mb-4 text-white">
        <FontAwesomeIcon icon={faEye} className="text-accent" />
        Top Viewed Candidates
      </div>

      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-4"
          transition={{
            duration: 25,
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: 0,
          }}
          initial={{ x: 0 }}
          animate={{ x: -width / 2 - data.length }}
          ref={ref}
        >
          {extendedData.map((candidate, index) => (
            <div key={index} className="shrink-0 w-56">
              <ImageDiv
                bgImage={PARTYLIST_TO_IMAGE[candidate.partyList]}
                className="flex items-end justify-between w-full"
              >
                <>
                  <div className="space-y-1 p-2">
                    <p className="rounded bg-white text-accent text-xs px-2 py-1 w-fit font-semibold">
                      {candidate.views} views
                    </p>
                    <p className="uppercase text-white text-3xl font-bebas">{candidate.name}</p>
                    <p className="italic text-white text-sm">For {candidate.position}</p>
                  </div>
                  <Image src={CANDIDATE_TO_IMAGE[candidate.name]} alt={candidate.name} width={80} height={80} />
                </>
              </ImageDiv>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
