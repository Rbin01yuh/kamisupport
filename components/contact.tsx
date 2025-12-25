"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-3 sm:mb-4">
            {t("contact.title1")}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {t("contact.title2")}
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-600 px-4">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <Card className="h-full rounded-2xl sm:rounded-3xl border-0 bg-gradient-to-br from-blue-600 to-blue-800 p-6 sm:p-8 lg:p-12 text-white shadow-2xl">
              <h3 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-bold">{t("contact.info.title")}</h3>
              <p className="mb-6 sm:mb-8 text-blue-100 leading-relaxed text-sm sm:text-base">
                {t("contact.info.desc")}
              </p>

              <div className="space-y-4 sm:space-y-6">
                {[
                  { icon: Mail, text: "ridhobintangaulia5@gmail.com", label: t("contact.email") },
                  { icon: Phone, text: "+62 815-3616-4746", label: t("contact.phone") },
                  { icon: MapPin, text: "Medan & Cirebon, Indonesia", label: t("contact.location") },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start sm:items-center gap-3 sm:gap-4"
                  >
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                      <item.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-blue-200 mb-1">{item.label}</p>
                      <span className="text-sm sm:text-lg break-words">{item.text}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 sm:mt-12">
                <h4 className="mb-3 sm:mb-4 font-semibold text-sm sm:text-base">{t("contact.follow")}</h4>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  {["LinkedIn", "Instagram", "Twitter"].map((social) => (
                    <motion.button
                      key={social}
                      whileHover={{ scale: 1.05, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-lg sm:rounded-xl bg-white/20 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base backdrop-blur transition-all hover:bg-white/30"
                    >
                      {social}
                    </motion.button>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <Card className="rounded-2xl sm:rounded-3xl border-0 bg-gradient-to-br from-white to-blue-50 p-6 sm:p-8 lg:p-12 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border-0 bg-white px-4 py-3 text-sm sm:text-base text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder={t("contact.name.placeholder")}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border-0 bg-white px-4 py-3 text-sm sm:text-base text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder={t("contact.email.placeholder")}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-gray-700">
                    {t("contact.phone")}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border-0 bg-white px-4 py-3 text-sm sm:text-base text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 transition-all"
                    placeholder={t("contact.phone.placeholder")}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full rounded-xl border-0 bg-white px-4 py-3 text-sm sm:text-base text-gray-900 shadow-sm ring-1 ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-600 transition-all resize-none"
                    placeholder={t("contact.message.placeholder")}
                    required
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl text-sm sm:text-base py-3 sm:py-4"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {t("contact.submit")}
                      <Send size={18} />
                    </span>
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
