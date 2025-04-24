import { fadeUp } from "@/utils/animations";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function LatestNewsSection() {
  return (
    <motion.section
      className="border rounded-lg bg-gradient-to-br from-[#EF4444] to-[#340A0A] p-4"
      variants={fadeUp}
    >
      <div className="flex items-center gap-2 text-lg font-medium mb-2">
        <FontAwesomeIcon icon={faNewspaper} />
        Latest News
      </div>
    </motion.section>
  );
}
