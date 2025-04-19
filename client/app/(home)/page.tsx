"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHourglass,
  faStar,
  faRectangleList,
  faNewspaper,
  faCalendarDays,
  faFire,
} from "@fortawesome/free-solid-svg-icons";
import { CountdownTimer } from "@/components/home/countdown";
import Image from "next/image";

type PartyList = "United" | "Just" | "Independent";
interface Candidate {
  name: string;
  votes: number;
  position: string;
  partyList: PartyList;
}

export default function HomePage() {
  // NOTE: Replace this with the data
  const targetDate = new Date("2025-04-30T08:00:00"); // Replace with your voting start time
  const votingForTheDayData: Candidate[] = [
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

  return (
    <main className="flex items-center justify-center w-full p-6">
      <div className="w-full max-w-[1000px]">
        <h1 className="text-3xl font-bold text-white mb-6">Home</h1>

        <div className="flex gap-6 w-full">
          {/* Left Column */}
          <div className="flex flex-col gap-4 flex-1">
            <section className="border rounded-lg bg-gradient-to-br from-[#EF4444] to-[#340A0A] p-4">
              <div className="flex items-center gap-2 text-lg font-medium mb-2">
                <FontAwesomeIcon icon={faHourglass} className="fa-fw" />
                Voting starts in
              </div>
              <CountdownTimer time={targetDate} />
            </section>

            <section className="border rounded-lg p-4">
              <div className="flex items-center gap-2 text-lg font-medium mb-2">
                <FontAwesomeIcon icon={faRectangleList} className="fa-fw" />
                Voting for the day
              </div>

              <div>
                {votingForTheDayData.map((candidate, index) => {
                  const bgImage =
                    candidate.partyList === "United"
                      ? "bg-[url(/party-list/united.jpg)]"
                      : candidate.partyList === "Just"
                        ? "bg-[url(/party-list/just.jpg)]"
                        : "bg-neutral-800";

                  return (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-lg mb-2 "
                    >
                      <div
                        className={`absolute inset-0 ${bgImage} bg-center bg-cover`}
                      />
                      <div className="absolute inset-0 bg-black opacity-40" />

                      <div className="relative z-10 flex items-end justify-between">
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
                          src={"/candidates/duterte-placeholder.png"}
                          alt={"SSG Logo"}
                          width={100}
                          height={100}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="border rounded-lg bg-gradient-to-br from-[#EF4444] to-[#340A0A] p-4">
              <div className="flex items-center gap-2 text-lg font-medium mb-2">
                <FontAwesomeIcon icon={faNewspaper} className="fa-fw" />
                Latest News
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4 flex-1">
            <div className="bg-black h-40 rounded-xl p-4 text-white flex items-center justify-center">
              Candidate of the Day
            </div>
            <div className="bg-neutral-800 h-40 rounded-xl p-4 text-white flex items-center justify-center">
              Election Timeline
            </div>
            <div className="bg-gradient-to-br from-red-500 to-[#340A0A] h-40 rounded-xl p-4 text-white flex items-center justify-center">
              Leaderboard for Engagement
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
