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

export default function HomePage() {
  // NOTE: Replace this with the actual voting start time
  const targetDate = new Date("2025-04-30T08:00:00"); // Replace with your voting start time

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

            <div className="bg-red-600 h-40 rounded-xl p-4 text-white flex items-center justify-center">
              Voting for the Day
            </div>

            <div className="bg-red-700 h-40 rounded-xl p-4 text-white flex items-center justify-center">
              Latest News
            </div>
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
