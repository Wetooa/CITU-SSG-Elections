'use client'
import { fadeUp } from '@/utils/animations'
import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface FAQItem {
  question: string
  answer: string
  isOpen: boolean
}

const FAQItems: FAQItem[] = [
  {
    question: 'How to Vote?',
    answer:
      'Voting is done face-to-face, please refer to the official CIT University - Commission on Elections Facebook page for any updates on the process.',
    isOpen: true,
  },
  {
    question: 'Where to Vote?',
    answer:
      'The designated areas to vote will be announced by the CIT University - Commission on Elections. Please refer to their Facebook page to be updated.',
    isOpen: false,
  },
  {
    question: 'What are the partylists?',
    answer:
      'The partylists for this election are United and Just. Each partylist represents a group of candidates running together with a shared platform and vision for the student body. You can learn more about each partylist on the Candidates page.',
    isOpen: false,
  },
  {
    question: 'When will the election voting start?',
    answer:
      'The election voting will officially start on April 30, 2025. Please check the homepage for the countdown timer showing exactly when voting will begin.',
    isOpen: false,
  },
  {
    question: 'How often does this site get updated?',
    answer:
      'The website updates the partial votes every 1 hour starting 12:00 PM on April 30, 2025 (Philippine Standard Time). The website will stop updating the partial votes 2 hours before the end of the election voting period',
    isOpen: false,
  },
]

export default function FAQPage() {
  const [faqItems, setFaqItems] = useState<FAQItem[]>(FAQItems)

  const toggleFAQ = (index: number) => {
    setFaqItems(
      faqItems.map((item, i) => {
        if (i === index) {
          return { ...item, isOpen: !item.isOpen }
        }
        return item
      })
    )
  }

  const contentVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        height: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: { type: 'spring', stiffness: 300, damping: 25, mass: 0.8 },
        opacity: { duration: 0.4, delay: 0.1 },
      },
    },
  }

  const innerContentVariants = {
    hidden: {
      opacity: 0,
      y: 10,
      transition: { duration: 0.2 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.2,
        ease: 'easeOut',
      },
    },
  }

  const iconVariants = {
    closed: { rotate: 0, scale: 1 },
    open: { rotate: 180, scale: 1.1 },
  }

  return (
    <motion.div className="p-4 sm:p-6 space-y-6" initial="initial" animate="animate" exit="exit">
      <motion.h1 className="text-3xl font-bold text-white" variants={fadeUp} transition={{ delay: 0.1 }}>
        Frequently Asked Questions (FAQ)
      </motion.h1>

      <motion.div className="space-y-4" variants={fadeUp} transition={{ delay: 0.2, staggerChildren: 0.1 }}>
        {faqItems.map((faq, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden border-[#F98F8F80] border bg-[linear-gradient(42.78deg,_#18181B_25.42%,_#FF6969_472.21%)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.5,
              ease: 'easeOut',
            }}
          >
            <button
              className="w-full p-4 text-left flex items-center gap-4 focus:outline-none hover:bg-[#ff696921] transition-colors duration-200"
              onClick={() => toggleFAQ(index)}
            >
              <motion.div
                animate={faq.isOpen ? 'open' : 'closed'}
                variants={iconVariants}
                transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
                className="text-accent flex items-center justify-center"
              >
                {faq.isOpen ? (
                  <Minus className="h-5 w-5 text-[#FF6969]" />
                ) : (
                  <Plus className="h-5 w-5 text-[#FF6969]" />
                )}
              </motion.div>

              <span className="text-xl font-medium">{faq.question}</span>
            </button>

            <AnimatePresence>
              {faq.isOpen && (
                <motion.div
                  key={`content-${index}`}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={contentVariants}
                  className="overflow-hidden"
                >
                  <motion.div className="py-4" variants={innerContentVariants}>
                    <div className="p-4 border-l-2 border-[#FF6969] ml-12">
                      <p className="text-gray-200">{faq.answer}</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
