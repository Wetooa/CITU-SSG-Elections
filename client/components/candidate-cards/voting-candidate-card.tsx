'use client'

import { getCandidateImage } from '@/lib/utils'
import { PARTYLIST_TO_ICON } from '@/utils/consts'
import type { Candidate } from '@/utils/types'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import ImageDiv from '../utils/image-div'
import Link from 'next/link'

interface CandidateCardProps {
  index: number
  bgImage: string
  candidate: Candidate
  isLosing?: boolean // used in h2h, showcases white votes bg if losing
  isPhotoLeft: boolean // orientation determined by position of candidate's photo
  isLongCard: boolean // for sole candidates with long row
  showPosition: boolean
  maxVotes?: number // maximum votes for calculating percentage
}

export const VotingCandidateCard = ({
  index,
  bgImage,
  candidate,
  isLosing,
  isPhotoLeft,
  isLongCard,
  showPosition,
  maxVotes = 2000,
}: CandidateCardProps) => {
  const turnoutPercentage = maxVotes > 0 ? Math.min(Math.round((candidate.votes / maxVotes) * 100), 100) : 0

  const mobileBarContainerRef = useRef<HTMLDivElement>(null)
  const desktopBarContainerRef = useRef<HTMLDivElement>(null)
  const longCardBarContainerRef = useRef<HTMLDivElement>(null)

  const [mobileBarWidth, setMobileBarWidth] = useState<number>(0)
  const [desktopBarWidth, setDesktopBarWidth] = useState<number>(0)
  const [longCardBarWidth, setLongCardBarWidth] = useState<number>(0)

  useEffect(() => {
    const updateBarWidths = () => {
      if (mobileBarContainerRef.current) {
        const containerWidth = mobileBarContainerRef.current.clientWidth
        setMobileBarWidth(containerWidth)
      }

      if (desktopBarContainerRef.current) {
        const containerWidth = desktopBarContainerRef.current.clientWidth
        setDesktopBarWidth(containerWidth)
      }

      if (longCardBarContainerRef.current) {
        const containerWidth = longCardBarContainerRef.current.clientWidth
        setLongCardBarWidth(containerWidth)
      }
    }

    updateBarWidths()

    window.addEventListener('resize', updateBarWidths)

    return () => {
      window.removeEventListener('resize', updateBarWidths)
    }
  }, [])

  return (
    <motion.div
      key={index}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="w-full"
    >
      <Link href={`/candidates/${candidate.balota_number}`}>
        <div className="block sm:hidden">
          <ImageDiv bgImage={bgImage} className="relative overflow-hidden rounded-lg min-h-[160px]">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex justify-between items-start p-3">
                {!showPosition && (
                  <Image
                    src={PARTYLIST_TO_ICON[candidate.party_list] || '/placeholder.svg'}
                    alt={candidate.party_list}
                    width={40}
                    height={40}
                    className="w-auto h-4"
                  />
                )}
                {showPosition && <p className="italic text-xs">For {candidate.position}</p>}
              </div>

              <div className="mt-auto p-3 pt-0 bg-gradient-to-t from-black/70 to-transparent">
                <p className="uppercase leading-tight m-0 text-2xl font-bebas text-wrap max-w-40">{candidate.name}</p>

                <div className="flex gap-8 items-center mt-1">
                  <p
                    className={`rounded-lg px-2 py-0.5 text-xs ${
                      isLosing ? 'bg-white text-accent' : 'bg-accent text-white'
                    }`}
                  >
                    {candidate.votes} votes
                  </p>
                  <span className="text-xs">{turnoutPercentage}%</span>
                </div>

                <div className="w-full mt-1" ref={mobileBarContainerRef}>
                  <div className="w-full bg-gray-700 rounded-full h-1.5 max-w-[120px]">
                    <div
                      className={`h-1.5 rounded-full ${isLosing ? 'bg-white' : 'bg-accent'}`}
                      style={{
                        width: mobileBarWidth
                          ? `${(turnoutPercentage / 100) * Math.min(mobileBarWidth, 120)}px`
                          : '0px',
                      }}
                    ></div>
                  </div>
                </div>
              </div>

              <Image
                src={getCandidateImage(candidate.name) || '/public/candidates/DUTERTE-PLACEHOLDER.png'}
                alt={candidate.name}
                width={192}
                height={192}
                className="absolute -right-24 -bottom-44 -z-10 object-none scale-75 w-96"
              />
            </div>
          </ImageDiv>
        </div>

        <div className="hidden sm:block">
          <ImageDiv
            bgImage={bgImage}
            className={`flex h-40 items-end justify-between ${isPhotoLeft && 'flex-row-reverse'}`}
          >
            <>
              <div className={`p-4 ${isPhotoLeft && 'place-items-end-safe'}`}>
                {!isLongCard && (
                  <>
                    <p
                      className={`rounded-lg px-2 py-1 w-fit text-sm ${
                        isLosing ? 'bg-white text-accent' : 'bg-accent text-white'
                      }`}
                    >
                      {candidate.votes} votes
                    </p>
                    <p className="uppercase leading-normal m-0 text-3xl sm:text-4xl font-bebas">{candidate.name}</p>
                  </>
                )}

                {showPosition ? (
                  <p className="italic leading-normal text-xs">For {candidate.position}</p>
                ) : (
                  <Image
                    src={PARTYLIST_TO_ICON[candidate.party_list] || '/placeholder.svg'}
                    alt={candidate.party_list}
                    width={40}
                    height={40}
                    className={`w-auto ${isLongCard ? 'h-12 mb-6' : 'h-4'}`}
                  />
                )}

                {!isLongCard && (
                  <div className="w-full mt-2" ref={desktopBarContainerRef}>
                    <div className="flex gap-8 text-xs mb-1">
                      <span>Voter Turnout</span>
                      <span>{turnoutPercentage}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5 max-w-[150px]">
                      <div
                        className={`h-2.5 rounded-full ${isLosing ? 'bg-white' : 'bg-accent'}`}
                        style={{
                          width: desktopBarWidth
                            ? `${(turnoutPercentage / 100) * Math.min(desktopBarWidth, 150)}px`
                            : '0px',
                        }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex pt-4">
                <Image
                  src={getCandidateImage(candidate.name) || '/public/candidates/DUTERTE-PLACEHOLDER.png'}
                  alt={candidate.name}
                  width={256}
                  height={256}
                  className={`absolute object-none -bottom-40  ${isPhotoLeft ? '-left-8' : '-right-12'}`}
                />

                {isLongCard && (
                  <div className="p-4 ml-60">
                    <p
                      className={`rounded-lg px-2 py-1 w-fit ${
                        isLosing ? 'bg-white text-accent' : 'bg-accent text-white'
                      }`}
                    >
                      {candidate.votes} votes
                    </p>
                    <p className="uppercase leading-normal m-0 text-3xl sm:text-4xl font-bebas">{candidate.name}</p>

                    <div className="w-full mt-2" ref={longCardBarContainerRef}>
                      <div className="flex gap-8 text-xs mb-1">
                        <span>Voter Turnout</span>
                        <span>{turnoutPercentage}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2.5 max-w-[200px]">
                        <div
                          className={`h-2.5 rounded-full ${isLosing ? 'bg-white' : 'bg-accent'}`}
                          style={{
                            width: longCardBarWidth
                              ? `${(turnoutPercentage / 100) * Math.min(longCardBarWidth, 200)}px`
                              : '0px',
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </>
          </ImageDiv>
        </div>
      </Link>
    </motion.div>
  )
}
