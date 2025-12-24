"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Award, Zap, HeadphonesIcon, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function WhyUs() {
  const { t } = useLanguage()

  const reasons = [
    {
      icon: Award,
      title: t("whyus.quality.title"),
      description: t("whyus.quality.desc"),
    },
    {
      icon: Zap,
      title: t("whyus.agile.title"),
      description: t("whyus.agile.desc"),
    },
    {
      icon: HeadphonesIcon,
      title: t("whyus.support.title"),
      description: t("whyus.support.desc"),
    },
    {
      icon: Shield,
      title: t("whyus.security.title"),
      description: t("whyus.security.desc"),
    },
  ]

  return (
    <section id="why-us" className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {t("whyus.badge")}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
            {t("whyus.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">{t("whyus.subtitle")}</p>
        </motion.div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                <Card className="group h-full rounded-2xl border-0 bg-gradient-to-br from-white to-blue-50 p-8 shadow-lg transition-all hover:shadow-2xl">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-xl"
                  >
                    <reason.icon size={32} />
                  </motion.div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
