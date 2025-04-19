import ImageDiv from "@/components/utils/image-div";
import {
  CANDIDATE_TO_IMAGE,
  PARTYLIST_TO_ICON,
  PARTYLIST_TO_IMAGE,
} from "@/utils/consts";
import { Candidate } from "@/utils/types";
import Image from "next/image";

export default function CandidatesPage() {
  const candidatesData: Candidate[] = [
    {
      name: "Adrian Sajulga",
      position: "President",
      partyList: "United",
    },
    {
      name: "Adrian Sajulga",
      position: "Vice President",
      partyList: "Just",
    },
    {
      name: "Adrian Sajulga",
      position: "President",
      partyList: "United",
    },
    {
      name: "Adrian Sajulga",
      position: "Vice President",
      partyList: "Just",
    },
    {
      name: "Adrian Sajulga",
      position: "President",
      partyList: "United",
    },
    {
      name: "Adrian Sajulga",
      position: "Vice President",
      partyList: "Just",
    },
    {
      name: "Adrian Sajulga",
      position: "President",
      partyList: "United",
    },
    {
      name: "Adrian Sajulga",
      position: "Vice President",
      partyList: "Just",
    },
    {
      name: "Adrian Sajulga",
      position: "President",
      partyList: "United",
    },
    {
      name: "Adrian Sajulga",
      position: "Vice President",
      partyList: "Just",
    },
    {
      name: "Adrian Sajulga",
      position: "President",
      partyList: "United",
    },
    {
      name: "Adrian Sajulga",
      position: "Vice President",
      partyList: "Just",
    },
    {
      name: "Adrian Sajulga",
      position: "President",
      partyList: "United",
    },
    {
      name: "Adrian Sajulga",
      position: "Vice President",
      partyList: "Just",
    },
  ];

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-3xl font-bold text-white">Candidates</h1>

      <div className="border p-4 rounded-lg space-y-2">
        {candidatesData.map((candidate, index) => {
          const candidateImage = CANDIDATE_TO_IMAGE[candidate.name];
          const bgImage = PARTYLIST_TO_IMAGE[candidate.partyList];
          const partyListIcon = PARTYLIST_TO_ICON[candidate.partyList];

          return (
            <ImageDiv
              bgImage={bgImage}
              key={index}
              className="flex gap-4 px-4 items-center"
            >
              <>
                <Image
                  src={candidateImage}
                  alt={candidate.name}
                  width={100}
                  height={100}
                />

                {/* Candidate details */}
                <div className="space-y-1">
                  <h1 className="text-3xl font-bold">{candidate.name}</h1>
                  <p className="italic text-sm">For {candidate.position}</p>
                </div>

                {/* Right image */}
                <Image
                  className="ml-auto"
                  src={partyListIcon}
                  alt={candidate.partyList}
                  width={100}
                  height={100}
                />
              </>
            </ImageDiv>
          );
        })}
      </div>
    </div>
  );
}
