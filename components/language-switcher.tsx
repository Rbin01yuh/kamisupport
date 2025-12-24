"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-1 rounded-full bg-gray-100 p-1">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage("id")}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
          language === "id"
            ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        {language !== "id" && <Globe size={14} />}
        ID
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setLanguage("en")}
        className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all ${
          language === "en"
            ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md"
            : "text-gray-600 hover:text-gray-900"
        }`}
      >
        {language !== "en" && <Globe size={14} />}
        EN
      </motion.button>
    </div>
  )
}
