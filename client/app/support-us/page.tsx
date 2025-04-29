"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { toast } from "sonner";

export default function SupportUs() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [feedback, setFeedback] = useState("");

  const handleRatingSelect = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmitReview = () => {
    if (selectedRating == null) {
      return;
    }
    console.log("Rating:", selectedRating);
    console.log("Feedback:", feedback);
    // Here you would typically send this data to your backend
    // alert("Thank you for your feedback!");
    setSelectedRating(null);
    setFeedback("");
    toast("Feedback has been Submitted!", {
      action: {
        label: "Okay",
        onClick: () => console.log("Undo"),
      },
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.1, rotate: [0, 5, -5, 0], transition: { duration: 0.3 } },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      className="min-h-screen text-white p-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Support Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Support the Platform Section */}
          <motion.div
            className="bg-[#8B2525]/80 rounded-lg p-6"
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h2 className="text-xl font-semibold flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              Support the Platform
            </h2>
            <motion.div
              className="bg-[#1a1a1a] p-4 rounded-md"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* QR Code Placeholder using Image component */}
              <motion.div
                className="w-full aspect-square bg-white relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Image
                  src="/icons/qr.png" // Replace with your actual QR code image path
                  alt="QR Code"
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Rate Your Experience Section */}
          <motion.div
            className="bg-[#8B2525]/80 rounded-lg p-6"
            variants={itemVariants}
            whileHover={{
              y: -5,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h2 className="text-xl font-semibold flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
              Rate Your Experience
            </h2>
            <motion.div
              className="flex justify-center space-x-6 mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {["Terrible", "Bad", "Okay", "Good", "Great"].map(
                (rating, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <motion.button
                      onClick={() => handleRatingSelect(rating)}
                      className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        selectedRating === rating
                          ? "bg-yellow-500 text-black"
                          : "bg-yellow-500/90 text-black hover:bg-yellow-400 transition"
                      }`}
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      animate={
                        selectedRating === rating
                          ? { scale: 1.15 }
                          : { scale: 1 }
                      }
                    >
                      {/* Simple emoji face */}
                      {index === 0 && "😠"}
                      {index === 1 && "🙁"}
                      {index === 2 && "😐"}
                      {index === 3 && "🙂"}
                      {index === 4 && "😁"}
                    </motion.button>
                    <motion.span
                      className="mt-2 text-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    >
                      {rating}
                    </motion.span>
                  </div>
                )
              )}
            </motion.div>
            <motion.textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="w-full bg-[#333]/50 text-white rounded-md p-3 min-h-24 mb-4"
              placeholder="Share feedback..."
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileFocus={{ boxShadow: "0 0 0 2px rgba(255, 255, 255, 0.2)" }}
            />
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.button
                onClick={handleSubmitReview}
                className="px-4 py-2 bg-[#8B2525] text-white rounded hover:bg-[#6b1d1d] transition"
                whileHover={{ scale: 1.05, backgroundColor: "#6b1d1d" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Submit Review
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
