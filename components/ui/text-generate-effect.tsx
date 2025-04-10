"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string
  className?: string
}) => {
  const [wordArray, setWordArray] = useState<string[]>([])

  useEffect(() => {
    setWordArray(words.split(" "))
  }, [words])

  return (
    <div className={cn("font-normal", className)}>
      {wordArray.map((word, idx) => {
        return (
          <motion.span
            key={`${word}-${idx}`}
            className="inline-block mr-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.5, // Controls how long each word fades in
              delay: idx * 0.2, // Controls the space between word appearances
              ease: [0.25, 0.1, 0.25, 1], // Smooth easing
            }}
          >
            {word}{" "}
          </motion.span>
        )
      })}
    </div>
  )
}
