import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { QuestionEntry, QA } from '@/utils/types'

// FontAwesomeIcon icon={faQuestionCircle}
export default function QuestionSection({
  generalData,
  courseData,
}: {
  generalData: QuestionEntry
  courseData: QuestionEntry
}) {
  const parseQA = (data: QuestionEntry): QA[] => {
    const qas: QA[] = []

    Object.entries(data).forEach(([key, value]) => {
      if (key.startsWith('q') && !key.includes('answer') && value?.trim()) {
        const index = key.replace('q', '')
        const answer = data[`answer_q${index}`]?.trim()
        if (answer) {
          const titleSplit = value.split('|')
          qas.push({
            title:
              titleSplit.length > 1
                ? titleSplit[0].trim()
                : `Question ${index}`,
            question:
              titleSplit.length > 1 ? titleSplit[1].trim() : value.trim(),
            answer,
          })
        }
      }
    })

    return qas
  }

  const generalQuestions = parseQA(generalData)
  const courseQuestions = parseQA(courseData)

  const QuestionCard = ({ title, question, answer }: QA) => {
    const [expanded, setExpanded] = useState(false)

    return (
      <div className="border rounded-lg p-4 space-y-2 bg-[#3D1A1A]">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faQuestionCircle} className="text-2xl" />
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <button onClick={() => setExpanded((prev) => !prev)} className="flex items-center gap-2 w-full text-left">
          <span className="text-2xl">{expanded ? '−' : '+'}</span>
          <p className="font-medium">{question}</p>
        </button>

        <AnimatePresence>
          {expanded && answer && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="pl-8 text-sm text-gray-300 overflow-hidden"
            >
              {answer}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-red-500 rounded-lg p-4 bg-[#2A0F0F]">
      <div>
        <h2 className="text-2xl font-bold mb-4">General Questions</h2>
        <div className="space-y-4">
          {generalQuestions.map((q, idx) => (
            <QuestionCard key={idx} {...q} />
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Course Related Questions</h2>
        <div className="space-y-4">
          {courseQuestions.map((q, idx) => (
            <QuestionCard key={idx} {...q} />
          ))}
        </div>
      </div>
    </div>
  )
}
