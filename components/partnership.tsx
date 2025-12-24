"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

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
    name: "TGD",
    logo: "/pictures/tgd.png",
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
    <section id="partnership" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-2">
            {t("partnership.title1")}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              {t("partnership.title2")}
            </span>
          </h2>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee space-x-12">
            {[...partners, ...partners].map((partner, index) => (
              <div key={`${partner.name}-${index}`} className="flex items-center justify-center flex-shrink-0">
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="h-12 w-auto object-contain opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
