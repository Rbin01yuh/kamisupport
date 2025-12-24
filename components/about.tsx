"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {t("about.badge")}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
            {t("about.title")}
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">{t("about.subtitle")}</p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "30+", label: t("about.projects") },
            { value: "30+", label: t("about.clients") },
            { value: "100%", label: t("about.satisfaction") },
            { value: "4+", label: t("about.experience") },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-2 text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent lg:text-5xl">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
