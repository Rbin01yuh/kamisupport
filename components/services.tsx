"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Globe, Smartphone, Brain, Cloud, Palette, Link } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Services() {
  const { t } = useLanguage()

  const services = [
    {
      icon: Globe,
      title: t("services.web.title"),
      description: t("services.web.desc"),
    },
    {
      icon: Smartphone,
      title: t("services.mobile.title"),
      description: t("services.mobile.desc"),
    },
    {
      icon: Brain,
      title: t("services.ai.title"),
      description: t("services.ai.desc"),
    },
    {
      icon: Cloud,
      title: t("services.cloud.title"),
      description: t("services.cloud.desc"),
    },
    {
      icon: Palette,
      title: t("services.ui.title"),
      description: t("services.ui.desc"),
    },
    {
      icon: Link,
      title: t("services.integration.title"),
      description: t("services.integration.desc"),
    },
  ]

  return (
    <section id="services" className="bg-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {t("services.badge")}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
            {t("services.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">{t("services.subtitle")}</p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Card className="group relative h-full overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-blue-50 to-white p-6 shadow-lg transition-all hover:shadow-2xl">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg"
                  >
                    <service.icon size={28} />
                  </motion.div>
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>

                  <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 blur-2xl transition-opacity group-hover:opacity-20" />
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
