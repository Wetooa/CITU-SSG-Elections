import { PARTYLIST_TO_IMAGE } from '@/utils/consts'
import { CandidateWithVotes } from '@/utils/types'
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
    <div className="m-4">
      <h3 className="w-full text-center italic mb-2 text-lg">For {position}</h3>
      <div className={`flex items-center gap-4 ${candidatesLength === 1 ? 'justify-center' : 'justify-between'}`}>
        <div className={candidatesLength === 1 ? 'w-full' : 'w-1/2'}>
          <VotingCandidateCard
            key={index}
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
            <div className="flex flex-col gap-2 items-center">
              <div className="border-l h-6" />
              <span className="text-lg font-semibold text-center px-2 font-sans flex-1">vs.</span>
              <div className="border-l h-6" />
            </div>

            <div className="w-1/2">
              <VotingCandidateCard
                key={index}
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
