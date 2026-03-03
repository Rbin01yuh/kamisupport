"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Code, Smartphone, PenTool, BookOpen, Layout, AlertCircle, Flame, Users, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function JokiPricing() {
  const { t, language } = useLanguage()

  const services = [
    {
      icon: BookOpen,
      title: language === "id" ? "Joki Skripsi (Full)" : "Full Thesis Writing",
      price: "Rp2.500.000",
      description: language === "id"
        ? "Pengerjaan skripsi lengkap dari BAB I sampai selesai termasuk revisi"
        : "Complete thesis writing from Chapter I to completion including revisions",
      features: language === "id" ? [
        "BAB I - BAB V lengkap",
        "Termasuk revisi dosen",
        "Plagiarism check",
        "Konsultasi progress",
      ] : [
        "Chapter I - V complete",
        "Includes advisor revisions",
        "Plagiarism check",
        "Progress consultation",
      ],
      slotsTotal: 10,
      slotsTaken: 10,
    },
    {
      icon: FileText,
      title: language === "id" ? "Joki Skripsi (Per-BAB)" : "Thesis Per-Chapter",
      price: "Rp500.000",
      description: language === "id"
        ? "Pengerjaan skripsi per bab sesuai kebutuhan Anda"
        : "Thesis writing per chapter according to your needs",
      features: language === "id" ? [
        "Pilih bab yang dibutuhkan",
        "Revisi 1x gratis",
        "Sesuai panduan kampus",
        "Pengerjaan 3-5 hari",
      ] : [
        "Choose the chapter you need",
        "1 free revision",
        "Following campus guidelines",
        "3-5 days delivery",
      ],
      slotsTotal: 15,
      slotsTaken: 15,
    },
    {
      icon: Code,
      title: language === "id" ? "Joki Project Web/App" : "Web/App Project",
      price: "Rp250.000",
      description: language === "id"
        ? "Pembuatan project website atau web application untuk tugas kuliah"
        : "Website or web application project for college assignments",
      features: language === "id" ? [
        "Website / Web App",
        "Source code lengkap",
        "Dokumentasi project",
        "Tutorial penggunaan",
      ] : [
        "Website / Web App",
        "Complete source code",
        "Project documentation",
        "Usage tutorial",
      ],
      slotsTotal: 8,
      slotsTaken: 6,
    },
    {
      icon: Smartphone,
      title: language === "id" ? "Joki Project Mobile App" : "Mobile App Project",
      price: "Rp300.000",
      description: language === "id"
        ? "Pembuatan project mobile application Android/iOS"
        : "Android/iOS mobile application project",
      features: language === "id" ? [
        "Android / iOS App",
        "Source code lengkap",
        "APK / Build siap pakai",
        "Dokumentasi & tutorial",
      ] : [
        "Android / iOS App",
        "Complete source code",
        "Ready-to-use APK / Build",
        "Documentation & tutorial",
      ],
      slotsTotal: 5,
      slotsTaken: 4,
    },
    {
      icon: PenTool,
      title: language === "id" ? "Joki Tugas / Makalah" : "Assignment / Paper",
      price: "Rp200.000",
      description: language === "id"
        ? "Pengerjaan tugas kuliah, makalah, essay, dan laporan"
        : "College assignments, papers, essays, and reports",
      features: language === "id" ? [
        "Makalah & essay",
        "Laporan praktikum",
        "Tugas harian",
        "Pengerjaan 1-3 hari",
      ] : [
        "Papers & essays",
        "Lab reports",
        "Daily assignments",
        "1-3 days delivery",
      ],
      slotsTotal: 20,
      slotsTaken: 14,
    },
    {
      icon: Layout,
      title: language === "id" ? "Joki UI/UX Design" : "UI/UX Design",
      price: "Rp200.000",
      description: language === "id"
        ? "Desain UI/UX untuk project kuliah atau portofolio"
        : "UI/UX design for college projects or portfolio",
      features: language === "id" ? [
        "Design Figma / Adobe XD",
        "Prototype interaktif",
        "Design system",
        "File source lengkap",
      ] : [
        "Figma / Adobe XD design",
        "Interactive prototype",
        "Design system",
        "Complete source files",
      ],
      slotsTotal: 8,
      slotsTaken: 7,
    },
  ]

  const getSlotColor = (taken: number, total: number) => {
    const percentage = (taken / total) * 100
    if (percentage >= 100) return { bg: "bg-gray-500", track: "bg-gray-100", text: "text-gray-600", badge: "bg-gray-50 border-gray-200 text-gray-700" }
    if (percentage >= 80) return { bg: "bg-red-500", track: "bg-red-100", text: "text-red-600", badge: "bg-red-50 border-red-200 text-red-700" }
    if (percentage >= 50) return { bg: "bg-amber-500", track: "bg-amber-100", text: "text-amber-600", badge: "bg-amber-50 border-amber-200 text-amber-700" }
    return { bg: "bg-emerald-500", track: "bg-emerald-100", text: "text-emerald-600", badge: "bg-emerald-50 border-emerald-200 text-emerald-700" }
  }

  return (
    <section id="joki-pricing" className="bg-gradient-to-br from-white via-blue-50 to-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            <FileText size={16} />
            {t("joki.badge")}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
            {t("joki.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 mb-6">{t("joki.subtitle")}</p>

          {/* Limited Seats Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-red-50 via-orange-50 to-amber-50 border border-red-200 px-6 py-3"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Flame size={22} className="text-red-500" />
            </motion.div>
            <span className="text-sm font-bold text-red-700 sm:text-base">
              {t("joki.limitedSeats")}
            </span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.75 }}
            >
              <Clock size={18} className="text-orange-500" />
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const slotsRemaining = service.slotsTotal - service.slotsTaken
            const slotPercentage = (service.slotsTaken / service.slotsTotal) * 100
            const colors = getSlotColor(service.slotsTaken, service.slotsTotal)

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Card className={`group relative h-full overflow-hidden rounded-2xl border-0 bg-white p-6 shadow-lg transition-all hover:shadow-2xl ${slotsRemaining === 0 ? "opacity-90 saturate-50" : ""}`}>
                    {/* Limited Seats Badge */}
                    {slotsRemaining <= 3 && slotsRemaining > 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute top-3 right-3"
                      >
                        <motion.div
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="flex items-center gap-1.5 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-red-500/30"
                        >
                          <Flame size={12} />
                          {language === "id" ? "Hampir Habis!" : "Almost Full!"}
                        </motion.div>
                      </motion.div>
                    )}

                    {slotsRemaining === 0 && (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="absolute top-3 right-3"
                      >
                        <motion.div
                          className="flex items-center gap-1.5 rounded-full bg-gray-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-gray-500/30"
                        >
                          {language === "id" ? "Penuh!" : "Full!"}
                        </motion.div>
                      </motion.div>
                    )}

                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className={`inline-flex h-14 w-14 items-center justify-center rounded-xl text-white shadow-lg ${slotsRemaining === 0 ? "bg-gray-400" : "bg-gradient-to-br from-blue-500 to-blue-700"}`}
                      >
                        <service.icon size={28} />
                      </motion.div>
                      <div className="text-right">
                        <span className="text-xs text-gray-500 block">{t("joki.startFrom")}</span>
                        <span className={`text-xl font-bold ${slotsRemaining === 0 ? "text-gray-500" : "text-blue-600"}`}>{service.price}</span>
                      </div>
                    </div>
                    
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{service.description}</p>

                    {/* Slots Indicator */}
                    <div className={`mb-4 rounded-xl border p-3 ${colors.badge}`}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-1.5">
                          <Users size={14} />
                          <span className="text-xs font-semibold">
                            {slotsRemaining === 0 
                              ? (language === "id" ? "Kuota Habis" : "Fully Booked")
                              : (language === "id" 
                                ? `Sisa ${slotsRemaining} slot bulan ini` 
                                : `${slotsRemaining} slots left this month`)}
                          </span>
                        </div>
                        <span className="text-xs font-bold">
                          {service.slotsTaken}/{service.slotsTotal}
                        </span>
                      </div>
                      <div className={`h-2 rounded-full ${colors.track} overflow-hidden`}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${slotPercentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                          className={`h-full rounded-full ${colors.bg}`}
                        />
                      </div>
                    </div>

                    <ul className="mb-6 space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${slotsRemaining === 0 ? "bg-gray-400" : "bg-blue-500"}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      asChild={slotsRemaining > 0}
                      disabled={slotsRemaining === 0}
                      className={`w-full text-white hover:shadow-lg ${
                        slotsRemaining === 0
                          ? "bg-gray-400 cursor-not-allowed opacity-100" // prevent button opacity from compounding disabled state
                          : slotsRemaining <= 3
                            ? "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600"
                            : "bg-gradient-to-r from-blue-600 to-blue-700"
                      }`}
                      size="default"
                    >
                      {slotsRemaining > 0 ? (
                        <a href={`https://wa.me/6281536164746?text=${encodeURIComponent(`Halo KAMIDUKUNG! Saya tertarik dengan layanan ${service.title}`)}`} target="_blank" rel="noopener noreferrer">
                          {slotsRemaining <= 3
                            ? (language === "id" ? "🔥 Ambil Slot Sekarang!" : "🔥 Grab Your Slot!")
                            : t("joki.cta")}
                        </a>
                      ) : (
                        <span>{language === "id" ? "Kuota Penuh" : "Fully Booked"}</span>
                      )}
                    </Button>

                    <div className={`absolute -bottom-2 -right-2 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity group-hover:opacity-20 ${slotsRemaining === 0 ? "bg-gray-400" : "bg-gradient-to-br from-blue-400 to-blue-600"}`} />
                  </Card>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-start gap-3 rounded-2xl bg-amber-50 border border-amber-200 px-6 py-4 max-w-2xl text-left">
            <AlertCircle size={20} className="text-amber-500 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800">{t("joki.note")}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
