import { cn } from "@/lib/utils";

const stages = [
  { name: "Filing", date: "Apr 10", isDone: true },
  { name: "Campaign Period", date: "Apr 14", isDone: true },
  { name: "Debate", date: "Apr 18", isDone: false },
  { name: "Voting", date: "Apr 20", isDone: false },
];

export default function ElectionTimeline() {
  return (
    <div className="flex justify-between items-center w-full px-4 py-6">
      {stages.map((stage, index) => (
        <div
          key={stage.name}
          className="flex flex-col items-center text-center relative w-full"
        >
          {/* Date */}
          <span className="text-sm font-medium mb-2 text-white">
            {stage.date}
          </span>

          {/* Line connector (except for last item) */}
          {index < stages.length - 1 && (
            <div className="absolute top-5 left-1/2 w-full h-0.5 bg-muted -z-10 translate-x-1/2" />
          )}

          {/* Circle */}
          <div
            className={cn(
              "w-5 h-5 rounded-full border-2 mb-2 transition-all duration-300",
              stage.isDone ? "bg-accent border-accent" : "border-white",
            )}
          />

          {/* Name */}
          <span className="text-xs font-semibold text-white">{stage.name}</span>
        </div>
      ))}
    </div>
  );
}
