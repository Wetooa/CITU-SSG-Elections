'use client'

import { CANDIDATE_TO_IMAGE, PARTYLIST_TO_ICON } from '@/utils/consts'
import ImageDiv from '../utils/image-div'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { CandidateWithVotes } from '@/utils/types'

interface CandidateCardProps {
  index: number
  bgImage: string
  candidate: CandidateWithVotes
  isLosing?: boolean // used in h2h, showcases white votes bg if losing
  isPhotoLeft: boolean // orientation determined by position of candidate's photo
  isLongCard: boolean // for sole candidates with long row
  showPosition: boolean
}

export const VotingCandidateCard = ({
  index,
  bgImage,
  candidate,
  isLosing,
  isPhotoLeft,
  isLongCard,
  showPosition,
}: CandidateCardProps) => {
  return (
    <motion.div
      key={index}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      // shud pass this as prop if we don't need it flex-1 everytime
      className="flex-1"
    >
      <ImageDiv bgImage={bgImage} className={`flex items-end justify-between ${isPhotoLeft && 'flex-row-reverse'}`}>
        <>
          <div className={`space-y-1 p-4 ${isPhotoLeft && 'place-items-end-safe'}`}>
            {!isLongCard && (
              <>
                <p
                  className={`rounded-lg px-2 py-1 w-fit ${isLosing ? 'bg-white text-accent' : 'bg-accent text-white'}`}
                >
                  {candidate.votes} votes
                </p>
                <p className="uppercase leading-normal m-0 text-4xl font-bebas">{candidate.name}</p>
              </>
            )}

            {showPosition ? (
              <p className="italic leading-normal text-sm">For {candidate.position}</p>
            ) : (
              <Image
                src={PARTYLIST_TO_ICON[candidate.partyList]}
                alt={candidate.partyList}
                width={40}
                height={40}
                className={`w-auto ${isLongCard ? 'h-12 mb-6' : 'h-4'}`}
              />
            )}
          </div>

          <div className="flex pt-4">
            <Image src={CANDIDATE_TO_IMAGE[candidate.name]} alt={candidate.name} width={100} height={100} />

            {isLongCard && (
              <div className="space-y-1 p-4">
                <p
                  className={`rounded-lg px-2 py-1 w-fit ${isLosing ? 'bg-white text-accent' : 'bg-accent text-white'}`}
                >
                  {candidate.votes} votes
                </p>
                <p className="uppercase leading-normal m-0 text-4xl font-bebas">{candidate.name}</p>
              </div>
            )}
          </div>
        </>
      </ImageDiv>
    </motion.div>
  )
}
