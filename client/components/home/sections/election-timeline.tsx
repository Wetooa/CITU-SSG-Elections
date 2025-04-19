import { fadeLeft } from "@/utils/animations";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import ElectionTimeline from "../timeline";

export default function ElectionTimelineSection() {
  return (
    <motion.section
      className="border rounded-lg p-4 bg-gradient-to-tr from-[#18181B] to-[#FF6969]"
      variants={fadeLeft}
    >
      <div className="flex items-center gap-2 text-lg font-medium mb-2">
        <FontAwesomeIcon icon={faCalendarDays} className="text-accent" />
        Election Timeline
      </div>

      <ElectionTimeline />
    </motion.section>
  );
}
