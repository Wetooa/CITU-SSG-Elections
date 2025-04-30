import { PARTYLIST_TO_IMAGE } from "@/utils/consts";
import { VotingCandidateCard } from "../candidate-cards/voting-candidate-card";
import type { Candidate } from "@/utils/types";

interface VotesCastRowProps {
  position: string;
  candidates: Candidate[];
  index: number;
}

export const VotesCastRow = ({
  position,
  candidates,
  index,
}: VotesCastRowProps) => {
  const candidatesByParty: Record<string, Candidate[]> = {};

  candidates.forEach((candidate) => {
    if (!candidatesByParty[candidate.party_list]) {
      candidatesByParty[candidate.party_list] = [];
    }
    candidatesByParty[candidate.party_list].push(candidate);
  });

  const totalVotesForPosition = candidates.reduce(
    (sum, candidate) => sum + candidate.votes,
    0,
  );

  console.log(`Position: ${position} | Total Votes: ${totalVotesForPosition}`);
  candidates.forEach((candidate) => {
    console.log(`Candidate: ${candidate.name} | Votes: ${candidate.votes}`);
  });

  const maxVotes = totalVotesForPosition > 0 ? totalVotesForPosition : 1;

  const partyLists = Object.keys(candidatesByParty);

  const partyTotalVotes: Record<string, number> = {};
  partyLists.forEach((party) => {
    partyTotalVotes[party] = candidatesByParty[party].reduce(
      (sum, candidate) => sum + candidate.votes,
      0,
    );
  });

  const winningParty = partyLists.reduce(
    (a, b) => (partyTotalVotes[a] > partyTotalVotes[b] ? a : b),
    partyLists[0],
  );

  return (
    <div className="m-2 sm:m-4">
      <h3 className="w-full text-center italic mb-2 text-base sm:text-lg">
        For {position}
      </h3>

      {/* Single candidate case */}
      {candidates.length === 1 && (
        <div className="flex justify-center">
          <div className="w-full">
            <VotingCandidateCard
              key={`${index}-0`}
              index={index}
              bgImage={PARTYLIST_TO_IMAGE[candidates[0].party_list]}
              candidate={candidates[0]}
              isPhotoLeft={true}
              showPosition={false}
              isLosing={false}
              isLongCard={true}
              maxVotes={maxVotes}
            />
          </div>
        </div>
      )}

      {/* Two parties case */}
      {partyLists.length === 2 && candidates.length > 1 && (
        <div className="flex flex-col sm:flex-row items-stretch gap-3 sm:gap-4">
          {/* First party */}
          <div className="w-full sm:w-1/2 space-y-3">
            {candidatesByParty[partyLists[0]].map(
              (candidate, candidateIndex) => (
                <VotingCandidateCard
                  key={`${index}-${partyLists[0]}-${candidateIndex}`}
                  index={candidateIndex}
                  bgImage={PARTYLIST_TO_IMAGE[candidate.party_list]}
                  candidate={candidate}
                  isPhotoLeft={true}
                  showPosition={false}
                  isLosing={partyLists[0] !== winningParty}
                  isLongCard={false}
                  maxVotes={maxVotes}
                />
              ),
            )}
          </div>

          {/* VS divider */}
          <div className="flex sm:flex-col flex-row gap-2 items-center justify-center my-1 sm:my-0">
            <div className="border-t sm:border-l sm:h-6 w-6 sm:w-auto" />
            <span className="text-base sm:text-lg font-semibold text-center px-2 font-sans">
              vs.
            </span>
            <div className="border-t sm:border-l sm:h-6 w-6 sm:w-auto" />
          </div>

          {/* Second party */}
          <div className="w-full sm:w-1/2 space-y-3">
            {candidatesByParty[partyLists[1]].map(
              (candidate, candidateIndex) => (
                <VotingCandidateCard
                  key={`${index}-${partyLists[1]}-${candidateIndex}`}
                  index={candidateIndex}
                  bgImage={PARTYLIST_TO_IMAGE[candidate.party_list]}
                  candidate={candidate}
                  isPhotoLeft={false}
                  showPosition={false}
                  isLosing={partyLists[1] !== winningParty}
                  isLongCard={false}
                  maxVotes={maxVotes}
                />
              ),
            )}
          </div>
        </div>
      )}

      {/* Single party with multiple candidates case */}
      {partyLists.length === 1 && candidates.length > 1 && (
        <div className="flex flex-col items-center gap-3">
          {candidatesByParty[partyLists[0]].map((candidate, candidateIndex) => (
            <div key={`${index}-${candidateIndex}`} className="w-full">
              <VotingCandidateCard
                index={candidateIndex}
                bgImage={PARTYLIST_TO_IMAGE[candidate.party_list]}
                candidate={candidate}
                isPhotoLeft={true}
                showPosition={false}
                isLosing={false}
                isLongCard={true}
                maxVotes={maxVotes}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
