"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import { Sparkles } from "lucide-react"
import Image from "next/image"

const partners = [
  {
    name: "Deli Serdang",
    logo: "/pictures/deliserdang.png",
  },
  {
    name: "Desa Cimenga",
    logo: "/pictures/desacimenga.png",
  },
  {
    name: "Rackh",
    logo: "/pictures/rackh.png",
  },
  {
    name: "UIN SSC",
    logo: "/pictures/uinssc.png",
  },
  {
    name: "UMC",
    logo: "/pictures/umc.png",
  },
  {
    name: "UMSU",
    logo: "/pictures/umsu.png",
  },
]

export function Partnership() {
  const { t } = useLanguage()

  return (
    <section id="partnership" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 py-20 lg:py-28">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-200/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Trusted Partners</span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
            {t("partnership.title1")}{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              {t("partnership.title2")}
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Dipercaya oleh institusi dan perusahaan terkemuka di Indonesia
          </p>
        </motion.div>

        {/* Auto-scrolling Marquee - Row 1 (Left to Right) */}
        <div className="relative overflow-hidden mb-6">
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-slate-50 via-blue-50/80 to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-slate-50 via-blue-50/80 to-transparent" />
          
          <div className="flex animate-marquee space-x-8 hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={`row1-${partner.name}-${index}`} 
                className="group flex-shrink-0 transition-transform duration-300 hover:scale-105"
              >
                <div className="flex h-24 w-44 items-center justify-center rounded-xl bg-white p-4 shadow-md ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:ring-blue-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="max-h-14 w-auto object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Auto-scrolling Marquee - Row 2 (Right to Left) */}
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-slate-50 via-blue-50/80 to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-slate-50 via-blue-50/80 to-transparent" />
          
          <div className="flex animate-marquee-reverse space-x-8 hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={`row2-${partner.name}-${index}`} 
                className="group flex-shrink-0 transition-transform duration-300 hover:scale-105"
              >
                <div className="flex h-24 w-44 items-center justify-center rounded-xl bg-white p-4 shadow-md ring-1 ring-gray-100 transition-all duration-300 hover:shadow-xl hover:ring-blue-300">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={60}
                    className="max-h-14 w-auto object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-200 bg-white/80 backdrop-blur-sm px-6 py-3 shadow-lg">
            <div className="flex -space-x-2">
              {[
                { name: "Rackh", logo: "/pictures/rackh.png" },
                { name: "UMSU", logo: "/pictures/umsu.png" },
                { name: "UIN SSC", logo: "/pictures/uinssc.png" }
              ].map((partner, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full bg-white ring-2 ring-white overflow-hidden flex items-center justify-center"
                  title={partner.name}
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="h-6 w-px bg-gray-300" />
            <p className="text-sm font-semibold text-gray-700">
              <span className="text-blue-600">6+ Partner</span> Terpercaya
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
