const stages = [
  { name: "Filing", date: "Apr 10", isDone: true },
  { name: "Campaign Period", date: "Apr 14", isDone: true },
  { name: "Debate", date: "Apr 18", isDone: false },
  { name: "Voting", date: "Apr 20", isDone: false },
];

export default function ElectionTimeline() {
  return (
    <div className="relative w-full flex justify-between items-start px-2 pt-6 pb-2">
      {stages.map((stage) => (
        <div key={stage.name} className="flex flex-col items-center w-1/4 z-10">
          {/* Date */}
          <span className="text-sm font-medium text-white mb-2">
            {stage.date}
          </span>

          {/* Circle */}
          <div
            className={`w-6 h-6 rounded-full border-4 mb-2 ${
              stage.isDone
                ? "bg-accent border-accent"
                : "bg-transparent border-white"
            }`}
          />

          {/* Label */}
          <span className="text-sm font-semibold text-white text-center">
            {stage.name}
          </span>
        </div>
      ))}
    </div>
  );
}
