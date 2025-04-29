import { PARTYLIST_TO_IMAGE } from '@/utils/consts'
import type { CandidateWithVotes } from '@/utils/types'
import { VotingCandidateCard } from '../candidate-cards/voting-candidate-card'

interface VotesCastRowProps {
  position: string
  candidates: CandidateWithVotes[]
  index: number
}

export const VotesCastRow = ({ position, candidates, index }: VotesCastRowProps) => {
  const candidatesLength = candidates.length
  const bgImageLeftCandidate = PARTYLIST_TO_IMAGE[candidates[0].partyList]
  const bgImageRightCandidate = candidatesLength > 1 ? PARTYLIST_TO_IMAGE[candidates[1].partyList] : ''

  return (
    <div className="m-2 sm:m-4">
      <h3 className="w-full text-center italic mb-2 text-base sm:text-lg">For {position}</h3>
      <div
        className={`flex flex-col sm:flex-row items-center gap-3 sm:gap-4 ${
          candidatesLength === 1 ? 'justify-center' : 'justify-between'
        }`}
      >
        <div className={candidatesLength === 1 ? 'w-full' : 'w-full sm:w-1/2'}>
          <VotingCandidateCard
            key={`${index}-0`}
            index={index}
            bgImage={bgImageLeftCandidate}
            candidate={candidates[0]}
            isPhotoLeft={true}
            showPosition={false}
            isLosing={candidatesLength === 2 ? candidates[0].votes < candidates[1].votes : false}
            isLongCard={candidatesLength === 1}
          />
        </div>

        {candidatesLength === 2 && (
          <>
            <div className="flex sm:flex-col flex-row gap-2 items-center my-1 sm:my-0">
              <div className="border-t sm:border-l sm:h-6 w-6 sm:w-auto" />
              <span className="text-base sm:text-lg font-semibold text-center px-2 font-sans flex-1">vs.</span>
              <div className="border-t sm:border-l sm:h-6 w-6 sm:w-auto" />
            </div>

            <div className="w-full sm:w-1/2">
              <VotingCandidateCard
                key={`${index}-1`}
                index={index}
                bgImage={bgImageRightCandidate}
                candidate={candidates[1]}
                isPhotoLeft={false}
                showPosition={false}
                isLosing={candidates[1].votes < candidates[0].votes}
                isLongCard={false}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
