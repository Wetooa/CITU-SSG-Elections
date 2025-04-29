'use client'

import { useEffect, useState } from 'react'

interface CountdownTimerProps {
  time: Date
}

export const CountdownTimer = ({ time }: CountdownTimerProps) => {
  const [remaining, setRemaining] = useState(getTimeDiff(time))

  useEffect(() => {
    const updateRemaining = () => setRemaining(getTimeDiff(time))

    updateRemaining()

    const interval = setInterval(updateRemaining, 1000)

    return () => clearInterval(interval)
  }, [time])

  if (!remaining) {
    return null
  }

  if (remaining.total <= 0) {
    return <p className="text-white text-xl">Voting has started!</p>
  }

  return (
    <div className="flex items-center gap-4 text-white text-center w-full">
      <CountdownBox label="Days" value={remaining.days} />
      <CountdownBox label="Hours" value={remaining.hours} />
      <CountdownBox label="Minutes" value={remaining.minutes} />
      <CountdownBox label="Seconds" value={remaining.seconds} />
    </div>
  )
}

const CountdownBox = ({ label, value }: { label: string; value: number }) => (
  <div className="flex-1 flex flex-col bg-[#141415] border border-[#F98F8F80] px-4 py-2 rounded-md min-w-[30px] items-center">
    <span className="font-bebas text-4xl md:text-7xl font-bold">{value.toString().padStart(2, '0')}</span>
    <span className="text-xs md:text-sm">{label}</span>
  </div>
)

const getTimeDiff = (target: Date) => {
  const total = target.getTime() - new Date().getTime()
  const seconds = Math.floor((total / 1000) % 60)
  const minutes = Math.floor((total / 1000 / 60) % 60)
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const days = Math.floor(total / (1000 * 60 * 60 * 24))

  return { total, days, hours, minutes, seconds }
}
