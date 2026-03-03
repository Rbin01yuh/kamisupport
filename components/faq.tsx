"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/contexts/language-context"

export function FAQ() {
  const { t } = useLanguage()

  const faqKeys = [
    "faq.q1", "faq.q2", "faq.q3", "faq.q4", "faq.q5", "faq.q6", "faq.q7", "faq.q8"
  ]

  return (
    <section id="faq" className="bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {t("faq.badge")}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
            {t("faq.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {t("faq.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqKeys.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="rounded-2xl border-0 bg-white px-6 shadow-lg">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 hover:no-underline">
                    {t(`${key}.question`)}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">{t(`${key}.answer`)}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
