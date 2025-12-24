"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Zap, Crown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Pricing() {
  const { t, language } = useLanguage()

  const plans = [
    {
      name: "Landing Page",
      price: language === "id" ? "Rp 1.000.000" : "$65",
      originalPrice: language === "id" ? "Rp 1.500.000" : "$100",
      description: language === "id" 
        ? "Cocok untuk bisnis yang membutuhkan presence online profesional"
        : "Perfect for businesses needing a professional online presence",
      features: language === "id" ? [
        "1 Halaman Landing Page",
        "Responsive Design (Mobile-Friendly)",
        "Modern & Premium UI/UX",
        "SEO Basic Optimization",
        "Integrasi WhatsApp CTA",
        "1 Minggu Pengerjaan",
        "Free Domain .com (1 Tahun)",
        "Free Hosting (1 Tahun)",
        "1 Bulan Support"
      ] : [
        "1 Landing Page",
        "Responsive Design (Mobile-Friendly)",
        "Modern & Premium UI/UX",
        "Basic SEO Optimization",
        "WhatsApp CTA Integration",
        "1 Week Delivery",
        "Free .com Domain (1 Year)",
        "Free Hosting (1 Year)",
        "1 Month Support"
      ],
      highlighted: false,
      icon: Zap,
      badge: language === "id" ? "HEMAT Rp 500.000" : "SAVE $35"
    },
    {
      name: language === "id" ? "Sistem Informasi + Landing Page" : "Information System + Landing Page",
      price: language === "id" ? "Rp 5.000.000" : "$330",
      originalPrice: null,
      description: language === "id" 
        ? "Paket lengkap sistem informasi dengan landing page profesional"
        : "Complete information system package with professional landing page",
      features: language === "id" ? [
        "Landing Page Premium",
        "Sistem Informasi Akademik",
        "Sistem Informasi Inventori",
        "Sistem Informasi Absensi",
        "Sistem Informasi Keuangan",
        "Sistem Informasi Arsip",
        "Sistem Informasi Manajemen Lainnya",
        "Database Integration",
        "Dashboard Admin",
        "Responsive Design",
        "3 Bulan Support",
        "Free Training"
      ] : [
        "Premium Landing Page",
        "Academic Information System",
        "Inventory Information System",
        "Attendance Information System",
        "Financial Information System",
        "Archive Information System",
        "Other Management Information Systems",
        "Database Integration",
        "Admin Dashboard",
        "Responsive Design",
        "3 Months Support",
        "Free Training"
      ],
      highlighted: true,
      icon: Sparkles,
      badge: null
    },
    {
      name: "Custom Solution",
      price: "Custom",
      originalPrice: null,
      description: language === "id" 
        ? "Solusi digital khusus sesuai kebutuhan bisnis Anda"
        : "Custom digital solutions tailored to your business needs",
      features: language === "id" ? [
        "Sistem Informasi Custom",
        "Automation & Workflow",
        "Integrasi Sistem (API)",
        "Web/Mobile Application",
        "AI & Machine Learning",
        "Cloud Infrastructure",
        "DevOps & CI/CD",
        "Tim Dedicated",
        "Support 24/7 Priority",
        "1 Tahun Maintenance",
        "Konsultasi Gratis"
      ] : [
        "Custom Information System",
        "Automation & Workflow",
        "System Integration (API)",
        "Web/Mobile Application",
        "AI & Machine Learning",
        "Cloud Infrastructure",
        "DevOps & CI/CD",
        "Dedicated Team",
        "24/7 Priority Support",
        "1 Year Maintenance",
        "Free Consultation"
      ],
      highlighted: false,
      icon: Crown,
      badge: null
    },
  ]

  return (
    <section id="pricing" className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {t("pricing.badge")}
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
            {t("pricing.title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">{t("pricing.subtitle")}</p>
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
                      ? "border-2 border-blue-500 bg-gradient-to-br from-blue-600 to-blue-800 text-white shadow-2xl"
                      : "border-0 bg-white shadow-lg hover:shadow-xl"
                  }`}
                >
                  {plan.highlighted && (
                    <div className="absolute -right-12 top-6 rotate-45 bg-yellow-400 px-12 py-1 text-xs font-bold text-blue-900">
                      POPULAR
                    </div>
                  )}

                  {plan.badge && !plan.highlighted && (
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div className={`mb-4 inline-flex items-center justify-center w-12 h-12 rounded-2xl ${
                    plan.highlighted ? "bg-white/20" : "bg-blue-100"
                  }`}>
                    <plan.icon className={`w-6 h-6 ${plan.highlighted ? "text-white" : "text-blue-600"}`} />
                  </div>

                  <h3 className={`mb-2 text-2xl font-bold ${plan.highlighted ? "text-white" : "text-gray-900"}`}>
                    {plan.name}
                  </h3>
                  
                  <div className="mb-4">
                    {plan.originalPrice && (
                      <span className={`text-lg line-through mr-2 ${plan.highlighted ? "text-blue-200" : "text-gray-400"}`}>
                        {plan.originalPrice}
                      </span>
                    )}
                    <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-blue-600"}`}>
                      {plan.price}
                    </span>
                  </div>
                  
                  <p className={`mb-6 ${plan.highlighted ? "text-blue-100" : "text-gray-600"}`}>{plan.description}</p>

                  <ul className="mb-8 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check
                          size={20}
                          className={`shrink-0 mt-0.5 ${plan.highlighted ? "text-blue-200" : "text-blue-600"}`}
                        />
                        <span className={`text-sm ${plan.highlighted ? "text-blue-50" : "text-gray-600"}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className={`w-full ${
                      plan.highlighted
                        ? "bg-white text-blue-600 hover:bg-blue-50"
                        : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:shadow-lg"
                    }`}
                    size="lg"
                  >
                    <a href="https://wa.me/6281536164746" target="_blank" rel="noopener noreferrer">
                      {t("pricing.cta")}
                    </a>
                  </Button>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 rounded-2xl bg-white px-8 py-4 shadow-lg">
            <div className="flex items-center gap-2">
              <Check size={20} className="text-green-500" />
              <span className="text-gray-700 font-medium">
                {language === "id" ? "Konsultasi Gratis" : "Free Consultation"}
              </span>
            </div>
            <div className="h-6 w-px bg-gray-200"></div>
            <div className="flex items-center gap-2">
              <Check size={20} className="text-green-500" />
              <span className="text-gray-700 font-medium">
                {language === "id" ? "Revisi Gratis" : "Free Revision"}
              </span>
            </div>
            <div className="h-6 w-px bg-gray-200"></div>
            <div className="flex items-center gap-2">
              <Check size={20} className="text-green-500" />
              <span className="text-gray-700 font-medium">
                {language === "id" ? "Garansi 100%" : "100% Guarantee"}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
