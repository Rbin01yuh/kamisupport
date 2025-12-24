"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Berapa lama waktu pengerjaan project?",
    answer:
      "Waktu pengerjaan tergantung kompleksitas project. Untuk website company profile sekitar 2-4 minggu, aplikasi web/mobile 2-3 bulan, dan project enterprise custom bisa 3-6 bulan. Kami selalu memberikan timeline yang jelas di awal project.",
  },
  {
    question: "Apakah ada biaya maintenance?",
    answer:
      "Setiap paket sudah termasuk maintenance gratis sesuai durasi yang tertera (3-12 bulan). Setelah periode tersebut, Anda bisa melanjutkan dengan paket maintenance tahunan atau per-insiden sesuai kebutuhan.",
  },
  {
    question: "Teknologi apa yang digunakan?",
    answer:
      "Kami menggunakan teknologi modern dan terkini seperti Next.js, React, Node.js, Python, dan berbagai framework lainnya. Pemilihan teknologi disesuaikan dengan kebutuhan dan skala project Anda.",
  },
  {
    question: "Apakah bisa custom sesuai kebutuhan?",
    answer:
      "Tentu saja! Semua paket kami dapat disesuaikan dengan kebutuhan spesifik bisnis Anda. Kami akan melakukan konsultasi mendalam untuk memahami requirements Anda sebelum memulai development.",
  },
  {
    question: "Bagaimana proses pembayaran?",
    answer:
      "Pembayaran dilakukan secara bertahap: 30% down payment, 40% saat development selesai 50%, dan 30% sisanya saat project selesai dan siap launch. Kami juga menerima berbagai metode pembayaran.",
  },
  {
    question: "Apakah ada garansi?",
    answer:
      "Ya, kami memberikan garansi bug-free selama masa maintenance. Jika terdapat bug atau error yang bukan disebabkan oleh modifikasi dari pihak klien, kami akan memperbaikinya tanpa biaya tambahan.",
  },
]

export function FAQ() {
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
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
            Pertanyaan{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              yang Sering Ditanyakan
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Temukan jawaban untuk pertanyaan umum tentang layanan kami
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="rounded-2xl border-0 bg-white px-6 shadow-lg">
                  <AccordionTrigger className="text-left text-lg font-semibold text-gray-900 hover:text-blue-600 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
