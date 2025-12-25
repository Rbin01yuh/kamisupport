"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Anton Wijaya",
    role: "Pegawai Negeri Swasta",
    content:
      "Kualitas code dan arsitektur sistem yang dibangun KAMIDUKUNG sangat solid. Maintenance jadi jauh lebih mudah.",
    rating: 5,
    icon: "briefcase",
  },
  {
    name: "Raka Pratama",
    role: "Klien",
    content:
      "Aplikasi mobile yang dibuat sangat memudahkan pelanggan kami untuk order. User experience nya luar biasa!",
    rating: 5,
    icon: "smartphone",
  },
  {
    name: "Alia Putri",
    role: "Klien",
    content:
      "Tim yang sangat profesional dan responsif. Solusi yang diberikan benar-benar sesuai dengan kebutuhan bisnis kami.",
    rating: 5,
    icon: "building",
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

                  <p className="mb-8 text-xl leading-relaxed text-gray-700">&ldquo;{testimonial.content}&rdquo;</p>

                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                      }}
                      className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg"
                    >
                      {testimonial.icon === "briefcase" && (
                        <motion.div
                          animate={{ y: [0, -3, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                          </svg>
                        </motion.div>
                      )}
                      {testimonial.icon === "smartphone" && (
                        <motion.div
                          animate={{ rotate: [0, -10, 10, 0] }}
                          transition={{
                            duration: 2.5,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                            <path d="M12 18h.01" />
                          </svg>
                        </motion.div>
                      )}
                      {testimonial.icon === "building" && (
                        <motion.div
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "reverse",
                          }}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                            <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                            <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                            <path d="M10 6h4" />
                            <path d="M10 10h4" />
                            <path d="M10 14h4" />
                            <path d="M10 18h4" />
                          </svg>
                        </motion.div>
                      )}
                      <motion.div
                        className="absolute inset-0 rounded-full bg-blue-400"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          repeatType: "reverse",
                        }}
                      />
                    </motion.div>
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
