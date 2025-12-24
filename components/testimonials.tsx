"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Rina Wijaya",
    role: "Owner, Toko Fashion Online",
    content:
      "KAMIDUKUNG mengubah bisnis kami! Website e-commerce yang mereka buat sangat profesional dan mudah digunakan. Penjualan kami meningkat 300% dalam 3 bulan!",
    rating: 5,
    image: "/business-woman-avatar.png",
  },
  {
    name: "Dedi Prasetyo",
    role: "CEO, Tech Startup",
    content:
      "Tim yang sangat responsif dan profesional. Aplikasi mobile kami selesai tepat waktu dengan kualitas di atas ekspektasi. Highly recommended!",
    rating: 5,
    image: "/tech-ceo-avatar.jpg",
  },
  {
    name: "Maya Kusuma",
    role: "Marketing Director, Enterprise Co.",
    content:
      "Sebagai perusahaan besar, kami membutuhkan partner yang dapat dipercaya. KAMIDUKUNG memberikan solusi custom yang sempurna untuk kebutuhan kami.",
    rating: 5,
    image: "/marketing-director-woman-avatar.jpg",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="testimonials" className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl mb-4">
            Apa Kata <span className="text-blue-200">Klien Kami</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-blue-100">
            Kepercayaan dan kepuasan klien adalah prioritas utama kami
          </p>
        </motion.div>

        <div className="relative">
          <div className="mx-auto max-w-4xl">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  scale: activeIndex === index ? 1 : 0.9,
                  display: activeIndex === index ? "block" : "none",
                }}
                transition={{ duration: 0.5 }}
              >
                <Card className="rounded-3xl border-0 bg-white p-8 shadow-2xl lg:p-12">
                  <Quote className="mb-6 h-12 w-12 text-blue-500 opacity-50" />

                  <div className="mb-6 flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  <p className="mb-8 text-xl leading-relaxed text-gray-700">"{testimonial.content}"</p>

                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="h-16 w-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="mt-8 flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  activeIndex === index ? "w-8 bg-white" : "bg-white/50 hover:bg-white/75"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
