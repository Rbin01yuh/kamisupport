"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Calendar, ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    id: "tren-web-development-2025",
    title: "Tren Web Development 2025",
    excerpt: "Teknologi dan framework terbaru yang akan mendominasi industri web development tahun ini.",
    date: "15 Jan 2025",
    image: "/pictures/typescript.jpg",
    category: "Technology",
  },
  {
    id: "pentingnya-ux-design-dalam-bisnis-digital",
    title: "Pentingnya UX Design dalam Bisnis Digital",
    excerpt: "Bagaimana user experience yang baik dapat meningkatkan konversi dan kepuasan pelanggan.",
    date: "10 Jan 2025",
    image: "/pictures/uxdesign.jpg",
    category: "Design",
  },
  {
    id: "automasi-bisnis-dengan-ai",
    title: "Automasi Bisnis dengan AI",
    excerpt: "Implementasi AI dan automation untuk efisiensi operasional bisnis modern.",
    date: "5 Jan 2025",
    image: "/pictures/aiautomation.png",
    category: "AI",
  },
]

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-20">
        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link
                href="/#blog"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="font-medium">Kembali ke Beranda</span>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                Blog & Insights
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4">
                Blog &{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Insights</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Artikel dan panduan terkini seputar teknologi dan digital transformation
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.id}`}>
                    <motion.div whileHover={{ y: -10 }} transition={{ duration: 0.3 }}>
                      <Card className="group h-full overflow-hidden rounded-3xl border-0 shadow-lg transition-all hover:shadow-2xl cursor-pointer">
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt={post.title}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        <div className="p-6">
                          <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                            <Calendar size={16} />
                            {post.date}
                          </div>
                          <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {post.title}
                          </h3>
                          <p className="mb-4 text-gray-600 leading-relaxed">{post.excerpt}</p>
                          <div className="flex items-center gap-2 font-semibold text-blue-600 group-hover:translate-x-2 transition-transform">
                            Baca Selengkapnya
                            <ArrowRight size={16} />
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
