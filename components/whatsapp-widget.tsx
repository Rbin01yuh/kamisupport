"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { useState } from "react"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)

  // WhatsApp number with country code
  const whatsappNumber = "6281536164746"
  const message = "Halo KAMIDUKUNG! Saya tertarik dengan layanan Anda."

  const handleClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  return (
    <>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5, type: "spring" }}
        className="fixed bottom-24 right-6 z-50"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg hover:shadow-xl transition-all"
        >
          <MessageCircle className="h-7 w-7 text-white" />

          {/* Pulse animation */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" />
        </motion.button>

        {/* Tooltip */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 20 }}
          className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm text-white shadow-lg pointer-events-none"
        >
          Chat with us on WhatsApp!
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 h-2 w-2 bg-gray-900" />
        </motion.div>
      </motion.div>
    </>
  )
}

