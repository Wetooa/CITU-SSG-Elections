"use client";

import { CountdownTimer } from "@/components/home/countdown";
import ElectionTimeline from "@/components/home/timeline";
import ImageDiv from "@/components/utils/image-div";
import { CANDIDATE_TO_IMAGE, PARTYLIST_TO_IMAGE } from "@/utils/consts";
import { CandidateWithVotes, Leaderboard } from "@/utils/types";
import {
  faCalendarDays,
  faFire,
  faHourglass,
  faNewspaper,
  faRectangleList,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function HomePage() {
  // NOTE: Replace this with the data
  const targetDate = new Date("2025-04-30T08:00:00"); // Replace with your voting start time
  const votingForTheDayData: CandidateWithVotes[] = [
    {
      name: "Adrian Sajulga",
      votes: 120,
      position: "President",
      partyList: "United",
    },
    {
      name: "Adrian Sajulga",
      votes: 120,
      position: "President",
      partyList: "Just",
    },
    {
      name: "Adrian Sajulga",
      votes: 120,
      position: "President",
      partyList: "United",
    },
  ];
  const candidateOfTheDayData: CandidateWithVotes = {
    name: "Adrian Sajulga",
    votes: 120,
    position: "President",
    partyList: "United",
  };
  const leaderboardData: Leaderboard[] = [
    {
      name: "Adrian Sajulga",
      position: "President",
      partyList: "United",
      award: "Most Viewed",
    },
    {
      name: "Adrian Sajulga",
      position: "President",
      partyList: "United",
      award: "Most Viewed",
    },
  ];

  return (
    <main className="flex items-center justify-center w-full p-6">
      <div className="w-full max-w-[1000px]">
        <h1 className="text-3xl font-bold text-white mb-6">Home</h1>

        <div className="flex gap-6 w-full">
          {/* Left Column */}
          <div className="flex flex-col gap-4 flex-1">
            <section className="border rounded-lg bg-gradient-to-br from-[#EF4444] to-[#340A0A] p-4">
              <div className="flex items-center gap-2 text-lg font-medium mb-2">
                <FontAwesomeIcon icon={faHourglass} />
                Voting starts in
              </div>
              <CountdownTimer time={targetDate} />
            </section>

            <section className="border rounded-lg p-4">
              <div className="flex items-center gap-2 text-lg font-medium mb-2">
                <FontAwesomeIcon
                  icon={faRectangleList}
                  className="text-accent"
                />
                Voting for the day
              </div>

              <div className="space-y-2">
                {votingForTheDayData.map((candidate, index) => {
                  const bgImage = PARTYLIST_TO_IMAGE[candidate.partyList];

                  return (
                    <ImageDiv
                      bgImage={bgImage}
                      key={index}
                      className="flex items-end justify-between"
                    >
                      <>
                        <div className="space-y-1 p-4">
                          <p className="rounded-lg bg-accent px-2 py-1 w-fit">
                            {candidate.votes} votes
                          </p>
                          <p className="uppercase leading-normal m-0 text-4xl font-bebas">
                            {candidate.name}
                          </p>
                          <p className="italic leading-normal text-sm">
                            For {candidate.position}
                          </p>
                        </div>

                        <Image
                          src={CANDIDATE_TO_IMAGE[candidate.name]}
                          alt={"SSG Logo"}
                          width={100}
                          height={100}
                        />
                      </>
                    </ImageDiv>
                  );
                })}
              </div>
            </section>

            <section className="border rounded-lg bg-gradient-to-br from-[#EF4444] to-[#340A0A] p-4">
              <div className="flex items-center gap-2 text-lg font-medium mb-2">
                <FontAwesomeIcon icon={faNewspaper} />
                Latest News
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 flex-1">
            <section className="border rounded-lg p-4">
              <div className="flex items-center gap-2 text-lg font-medium mb-2">
                <FontAwesomeIcon icon={faStar} className="text-accent" />
                Candidate of the Day
              </div>

              <ImageDiv
                bgImage={PARTYLIST_TO_IMAGE[candidateOfTheDayData.partyList]}
                className="flex items-end justify-between"
              >
                <>
                  <div className="space-y-1 p-4">
                    <p className="uppercase leading-16 m-0 text-7xl font-bebas">
                      {candidateOfTheDayData.name}
                    </p>
                    <p className="italic leading-normal text-sm">
                      For {candidateOfTheDayData.position}
                    </p>
                  </div>

                  <Image
                    src={CANDIDATE_TO_IMAGE[candidateOfTheDayData.name]}
                    alt={"SSG Logo"}
                    width={100}
                    height={100}
                  />
                </>
              </ImageDiv>
            </section>

            <section className="border rounded-lg p-4 bg-gradient-to-tr from-[#18181B] to-[#FF6969]">
              <div className="flex items-center gap-2 text-lg font-medium mb-2">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="text-accent"
                />
                Election Timeline
              </div>

              <ElectionTimeline />
            </section>

            <section className="border rounded-lg p-4">
              <div className="flex items-center gap-2 text-lg font-medium mb-4 text-white">
                <FontAwesomeIcon icon={faFire} className="text-accent" />
                Leaderboard for Engagement
              </div>

              <div className="flex gap-4 overflow-x-auto pb-2">
                {leaderboardData.map((candidate, index) => (
                  <ImageDiv
                    bgImage={
                      PARTYLIST_TO_IMAGE[candidateOfTheDayData.partyList]
                    }
                    key={index}
                    className="flex items-end justify-between"
                  >
                    <>
                      <div className="space-y-1 p-2">
                        <p className="rounded bg-white text-accent text-xs px-2 py-1 w-fit font-semibold">
                          {candidate.award}
                        </p>
                        <p className="uppercase text-white text-3xl font-bebas">
                          {candidate.name}
                        </p>
                        <p className="italic text-white text-sm">
                          For {candidate.position}
                        </p>
                      </div>

                      <Image
                        src={CANDIDATE_TO_IMAGE[candidate.name]}
                        alt={`${candidate.name} image`}
                        width={80}
                        height={80}
                      />
                    </>
                  </ImageDiv>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
