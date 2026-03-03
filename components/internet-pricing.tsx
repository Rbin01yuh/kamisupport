"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Wifi, MapPin, Phone, Signal, Zap, Crown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function InternetPricing() {
  const { t, language } = useLanguage()

  const plans = [
    {
      name: "10 Mbps",
      speed: "10",
      price: "Rp160.000",
      description: language === "id"
        ? "Cocok untuk penggunaan harian dan keluarga kecil"
        : "Suitable for daily use and small families",
      features: language === "id" ? [
        "Koneksi stabil dan andal",
        "Cocok untuk penggunaan dasar",
        "Streaming video lancar",
        "Browsing & sosial media",
        "Support responsif",
      ] : [
        "Stable and reliable connection",
        "Suitable for basic usage",
        "Smooth video streaming",
        "Browsing & social media",
        "Responsive support",
      ],
      highlighted: false,
      icon: Signal,
    },
    {
      name: "15 Mbps",
      speed: "15",
      price: "Rp200.000",
      description: language === "id"
        ? "Ideal untuk rumah tangga aktif & usaha kecil dengan banyak perangkat"
        : "Ideal for active households & small businesses with many devices",
      features: language === "id" ? [
        "Kecepatan akses cepat",
        "Koneksi lancar tanpa hambatan",
        "Meeting online tanpa gangguan",
        "Multi-device support",
        "Operasional bisnis lancar",
        "Support prioritas",
      ] : [
        "Fast access speed",
        "Smooth uninterrupted connection",
        "Online meetings without lag",
        "Multi-device support",
        "Smooth business operations",
        "Priority support",
      ],
      highlighted: true,
      icon: Zap,
    },
    {
      name: "20 Mbps",
      speed: "20",
      price: "Rp220.000",
      description: language === "id"
        ? "Performa lebih cepat & stabil untuk penggunaan intensif maupun kebutuhan bisnis"
        : "Faster & more stable performance for intensive use and business needs",
      features: language === "id" ? [
        "Performa stabil dan konsisten",
        "Gaming & streaming 4K",
        "Upload & download cepat",
        "Cocok untuk WFH & bisnis",
        "Multi-device tanpa lag",
        "Support prioritas 24/7",
      ] : [
        "Stable and consistent performance",
        "Gaming & 4K streaming",
        "Fast upload & download",
        "Suitable for WFH & business",
        "Multi-device without lag",
        "24/7 priority support",
      ],
      highlighted: false,
      icon: Crown,
    },
  ]

  return (
    <section id="internet-pricing" className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-20 lg:py-32 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-white opacity-5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-300 opacity-10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <Wifi size={16} />
            {t("internet.badge")}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-4">
            {t("internet.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-blue-100">{t("internet.subtitle")}</p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div whileHover={{ y: -10, scale: plan.highlighted ? 1.02 : 1.01 }} transition={{ duration: 0.3 }}>
                <Card
                  className={`relative h-full overflow-hidden rounded-3xl p-8 transition-all ${
                    plan.highlighted
                      ? "border-2 border-yellow-400 bg-white text-gray-900 shadow-2xl shadow-yellow-400/20 scale-105"
                      : "border-0 bg-white/10 backdrop-blur-md text-white shadow-lg hover:bg-white/15"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -right-12 top-6 rotate-45 bg-gradient-to-r from-yellow-400 to-orange-400 px-12 py-1 text-xs font-bold text-gray-900">
                      POPULAR
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-2xl ${
                    plan.highlighted ? "bg-blue-100" : "bg-white/20"
                  }`}>
                    <plan.icon className={`w-6 h-6 ${plan.highlighted ? "text-blue-600" : "text-white"}`} />
                  </div>

                  <div className="mb-2 text-sm font-medium uppercase tracking-wider opacity-75">
                    PAKET
                  </div>
                  <h3 className={`mb-2 text-3xl font-bold ${plan.highlighted ? "text-blue-600" : "text-white"}`}>
                    {plan.speed} <span className="text-lg">Mbps</span>
                  </h3>
                  
                  <div className="mb-4">
                    <span className={`text-3xl font-bold ${plan.highlighted ? "text-gray-900" : "text-white"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-base ${plan.highlighted ? "text-gray-500" : "text-blue-200"}`}>
                      {t("internet.perMonth")}
                    </span>
                  </div>
                  
                  <p className={`mb-6 text-sm ${plan.highlighted ? "text-gray-600" : "text-blue-100"}`}>{plan.description}</p>

                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          size={18}
                          className={`shrink-0 mt-0.5 ${plan.highlighted ? "text-green-500" : "text-blue-200"}`}
                        />
                        <span className={`text-sm ${plan.highlighted ? "text-gray-600" : "text-blue-50"}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg"
                        : "bg-white text-blue-700 hover:bg-blue-50"
                    }`}
                    size="lg"
                  >
                    <a href="https://wa.me/6281536164746?text=Halo%20KAMIDUKUNG!%20Saya%20tertarik%20dengan%20paket%20internet%20RT/RW%20Net" target="_blank" rel="noopener noreferrer">
                      {t("internet.cta")}
                    </a>
                  </Button>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Coverage Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16"
        >
          <div className="rounded-3xl bg-white/10 backdrop-blur-md p-6 sm:p-8 border border-white/20">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-yellow-400/20">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{t("internet.coverage.title")}</h3>
              </div>
              <p className="text-blue-100 flex-1">{t("internet.coverage.desc")}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {["Kutalimbaru", "Suka Raya", "Glugur", "Tuntungan", "Tanjung Anom"].map((area) => (
                <span key={area} className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                  <MapPin size={14} className="text-yellow-400" />
                  {area}
                </span>
              ))}
              <span className="inline-flex items-center rounded-full bg-yellow-400/20 px-4 py-2 text-sm font-medium text-yellow-300">
                {language === "id" ? "& sekitarnya" : "& surroundings"}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-6 rounded-2xl bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-4 border border-white/20">
            <div className="flex items-center gap-2 text-white font-semibold">
              <Phone size={18} className="text-yellow-400" />
              {t("internet.contact")}
            </div>
            <div className="hidden sm:block h-6 w-px bg-white/30" />
            <span className="text-yellow-300 font-bold">{t("internet.contactName")}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
