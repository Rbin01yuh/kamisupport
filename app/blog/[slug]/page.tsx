"use client"

import { useParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { motion } from "framer-motion"
import { Calendar, ArrowLeft, User, Clock, Tag } from "lucide-react"
import Link from "next/link"

// Blog data with full content
const blogData: Record<string, {
  title: string
  excerpt: string
  date: string
  image: string
  category: string
  author: string
  readTime: string
  content: {
    type: "paragraph" | "heading" | "list" | "quote"
    text?: string
    items?: string[]
  }[]
}> = {
  "tren-web-development-2025": {
    title: "Tren Web Development 2025",
    excerpt: "Teknologi dan framework terbaru yang akan mendominasi industri web development tahun ini.",
    date: "15 Jan 2025",
    image: "/pictures/typescript.jpg",
    category: "Technology",
    author: "Ridho Bintang Aulia",
    readTime: "8 menit",
    content: [
      {
        type: "paragraph",
        text: "Industri web development terus berkembang pesat dengan berbagai inovasi teknologi yang muncul setiap tahunnya. Memasuki tahun 2025, ada beberapa tren penting yang akan mendominasi dan mengubah cara kita membangun aplikasi web."
      },
      {
        type: "heading",
        text: "1. AI-Powered Development Tools"
      },
      {
        type: "paragraph",
        text: "Kecerdasan buatan (AI) telah mengubah cara developer bekerja. Tools seperti GitHub Copilot, Cursor, dan berbagai AI code assistants lainnya semakin canggih dalam membantu proses coding. Di tahun 2025, kita akan melihat adopsi yang lebih luas dari AI-powered development tools yang dapat:"
      },
      {
        type: "list",
        items: [
          "Menghasilkan code boilerplate secara otomatis",
          "Mendeteksi dan memperbaiki bug dengan lebih akurat",
          "Memberikan saran optimasi performa real-time",
          "Membantu dalam code review dan dokumentasi"
        ]
      },
      {
        type: "heading",
        text: "2. Edge Computing & Edge Functions"
      },
      {
        type: "paragraph",
        text: "Edge computing membawa komputasi lebih dekat ke pengguna akhir, mengurangi latency dan meningkatkan performa. Platform seperti Vercel Edge Functions, Cloudflare Workers, dan Deno Deploy memungkinkan developer untuk menjalankan kode server di edge locations di seluruh dunia."
      },
      {
        type: "quote",
        text: "Edge computing bukan hanya tentang kecepatan, tetapi juga tentang menciptakan pengalaman pengguna yang lebih responsif dan personal."
      },
      {
        type: "heading",
        text: "3. React Server Components & Next.js 15"
      },
      {
        type: "paragraph",
        text: "React Server Components (RSC) telah matang dan menjadi standar baru dalam pengembangan aplikasi React. Next.js 15 membawa fitur-fitur baru yang memudahkan implementasi RSC, termasuk improved caching, streaming, dan partial prerendering."
      },
      {
        type: "heading",
        text: "4. TypeScript Sebagai Standar"
      },
      {
        type: "paragraph",
        text: "TypeScript bukan lagi pilihan, melainkan keharusan dalam proyek-proyek web modern. Dengan dukungan IDE yang semakin baik dan ekosistem yang matang, TypeScript memberikan type safety yang sangat dibutuhkan untuk proyek skala besar."
      },
      {
        type: "heading",
        text: "5. Web Components & Design Systems"
      },
      {
        type: "paragraph",
        text: "Adopsi Web Components terus meningkat sebagai cara untuk membuat komponen UI yang reusable dan framework-agnostic. Design systems seperti yang digunakan oleh perusahaan besar menjadi lebih accessible untuk developer dan tim kecil."
      },
      {
        type: "heading",
        text: "Kesimpulan"
      },
      {
        type: "paragraph",
        text: "Tahun 2025 membawa perubahan signifikan dalam landscape web development. Developer yang ingin tetap relevan harus terus belajar dan mengadopsi teknologi baru ini. Yang terpenting adalah memilih teknologi yang sesuai dengan kebutuhan proyek dan tim Anda."
      }
    ]
  },
  "pentingnya-ux-design-dalam-bisnis-digital": {
    title: "Pentingnya UX Design dalam Bisnis Digital",
    excerpt: "Bagaimana user experience yang baik dapat meningkatkan konversi dan kepuasan pelanggan.",
    date: "10 Jan 2025",
    image: "/pictures/uxdesign.jpg",
    category: "Design",
    author: "Alfarizi Dwi Prasetyo",
    readTime: "6 menit",
    content: [
      {
        type: "paragraph",
        text: "Dalam era digital yang kompetitif, User Experience (UX) Design bukan lagi sekadar 'nice to have' tetapi menjadi kebutuhan fundamental bagi keberhasilan bisnis. UX yang baik dapat menjadi pembeda utama antara bisnis yang berkembang dan yang stagnan."
      },
      {
        type: "heading",
        text: "Mengapa UX Design Penting?"
      },
      {
        type: "paragraph",
        text: "UX Design yang efektif membawa dampak langsung terhadap metrik bisnis yang penting. Penelitian menunjukkan bahwa setiap $1 yang diinvestasikan dalam UX menghasilkan return sebesar $100 - ROI sebesar 9,900%."
      },
      {
        type: "list",
        items: [
          "Meningkatkan tingkat konversi hingga 200-400%",
          "Mengurangi bounce rate secara signifikan",
          "Meningkatkan customer satisfaction dan loyalty",
          "Mengurangi biaya support dan maintenance",
          "Mempercepat time-to-market untuk fitur baru"
        ]
      },
      {
        type: "heading",
        text: "Prinsip-Prinsip UX Design yang Efektif"
      },
      {
        type: "paragraph",
        text: "Untuk menciptakan pengalaman pengguna yang luar biasa, ada beberapa prinsip fundamental yang harus diperhatikan:"
      },
      {
        type: "heading",
        text: "1. User-Centered Design"
      },
      {
        type: "paragraph",
        text: "Semua keputusan desain harus berdasarkan penelitian dan pemahaman mendalam tentang kebutuhan, perilaku, dan pain points pengguna. Melakukan user research, persona development, dan user journey mapping adalah langkah-langkah krusial."
      },
      {
        type: "heading",
        text: "2. Aksesibilitas"
      },
      {
        type: "paragraph",
        text: "Desain yang inklusif memastikan produk dapat digunakan oleh semua orang, termasuk mereka dengan disabilitas. Ini bukan hanya kewajiban etis, tetapi juga memperluas jangkauan pasar Anda."
      },
      {
        type: "quote",
        text: "Good design is actually a lot harder to notice than poor design, in part because good designs fit our needs so well that the design is invisible. - Don Norman"
      },
      {
        type: "heading",
        text: "3. Konsistensi"
      },
      {
        type: "paragraph",
        text: "Konsistensi dalam elemen visual dan interaksi membantu pengguna membangun mental model yang kuat tentang cara kerja produk Anda. Ini mengurangi cognitive load dan membuat pengalaman lebih intuitif."
      },
      {
        type: "heading",
        text: "4. Feedback & Response Time"
      },
      {
        type: "paragraph",
        text: "Pengguna harus selalu tahu apa yang terjadi. Berikan feedback visual yang jelas untuk setiap interaksi dan pastikan response time tetap cepat. Loading states, error messages, dan success confirmations adalah elemen penting."
      },
      {
        type: "heading",
        text: "Implementasi UX dalam Bisnis"
      },
      {
        type: "paragraph",
        text: "Untuk mengimplementasikan UX Design yang efektif dalam bisnis Anda, mulailah dengan audit UX untuk memahami kondisi saat ini. Libatkan pengguna dalam proses desain melalui usability testing, dan iterasi berdasarkan feedback yang didapat."
      },
      {
        type: "heading",
        text: "Kesimpulan"
      },
      {
        type: "paragraph",
        text: "UX Design bukan biaya, melainkan investasi yang memberikan return signifikan. Dalam lanskap digital yang semakin kompetitif, perusahaan yang memprioritaskan pengalaman pengguna akan memiliki keunggulan kompetitif yang berkelanjutan."
      }
    ]
  },
  "automasi-bisnis-dengan-ai": {
    title: "Automasi Bisnis dengan AI",
    excerpt: "Implementasi AI dan automation untuk efisiensi operasional bisnis modern.",
    date: "5 Jan 2025",
    image: "/pictures/aiautomation.png",
    category: "AI",
    author: "Ridho Bintang Aulia",
    readTime: "10 menit",
    content: [
      {
        type: "paragraph",
        text: "Artificial Intelligence (AI) telah mengubah lanskap bisnis secara fundamental. Dari startup kecil hingga enterprise besar, automation berbasis AI kini menjadi kunci untuk meningkatkan efisiensi operasional dan competitive advantage."
      },
      {
        type: "heading",
        text: "Apa Itu Business Automation dengan AI?"
      },
      {
        type: "paragraph",
        text: "Business automation dengan AI melibatkan penggunaan kecerdasan buatan untuk mengotomasi tugas-tugas repetitif, menganalisis data dalam skala besar, dan membuat keputusan cerdas tanpa intervensi manusia. Ini berbeda dengan automation tradisional yang hanya mengikuti aturan yang telah ditentukan."
      },
      {
        type: "heading",
        text: "Area-Area Utama untuk AI Automation"
      },
      {
        type: "heading",
        text: "1. Customer Service & Chatbots"
      },
      {
        type: "paragraph",
        text: "AI-powered chatbots dapat menangani ribuan customer inquiries secara simultan, 24/7. Dengan Natural Language Processing (NLP) yang semakin canggih, chatbot modern dapat memahami konteks dan memberikan respons yang relevan."
      },
      {
        type: "list",
        items: [
          "Mengurangi waktu respons dari jam menjadi detik",
          "Menangani hingga 80% pertanyaan rutin secara otomatis",
          "Mengekstrak insights dari interaksi pelanggan",
          "Escalation otomatis ke human agent untuk kasus kompleks"
        ]
      },
      {
        type: "heading",
        text: "2. Data Processing & Analytics"
      },
      {
        type: "paragraph",
        text: "AI dapat memproses dan menganalisis data dalam volume yang tidak mungkin dilakukan manusia. Ini termasuk document processing, image recognition, dan predictive analytics yang membantu pengambilan keputusan strategis."
      },
      {
        type: "heading",
        text: "3. Marketing Automation"
      },
      {
        type: "paragraph",
        text: "AI marketing tools dapat melakukan personalisasi dalam skala besar, mengoptimasi ad spending, dan memprediksi customer behavior. Email marketing, content recommendations, dan dynamic pricing adalah contoh implementasi umum."
      },
      {
        type: "quote",
        text: "AI tidak menggantikan manusia, tetapi memberdayakan mereka untuk fokus pada pekerjaan yang lebih bermakna dan strategis."
      },
      {
        type: "heading",
        text: "4. Supply Chain & Operations"
      },
      {
        type: "paragraph",
        text: "Dalam supply chain, AI dapat memprediksi demand, mengoptimasi inventory, dan mengidentifikasi potensi disruption sebelum terjadi. Ini mengurangi waste dan meningkatkan efisiensi keseluruhan."
      },
      {
        type: "heading",
        text: "5. HR & Recruitment"
      },
      {
        type: "paragraph",
        text: "AI dapat membantu dalam screening resume, memprediksi candidate fit, dan bahkan conduct initial interviews melalui video analysis. Ini mempercepat proses hiring dan meningkatkan kualitas hire."
      },
      {
        type: "heading",
        text: "Langkah-Langkah Implementasi"
      },
      {
        type: "list",
        items: [
          "Identifikasi proses yang paling membutuhkan automation",
          "Mulai dengan pilot project untuk proof of concept",
          "Pilih teknologi yang sesuai dengan kebutuhan dan budget",
          "Train tim untuk beradaptasi dengan workflow baru",
          "Monitor dan iterate berdasarkan hasil"
        ]
      },
      {
        type: "heading",
        text: "Tantangan yang Perlu Diperhatikan"
      },
      {
        type: "paragraph",
        text: "Implementasi AI automation bukan tanpa tantangan. Data quality, integration dengan sistem existing, dan change management adalah area yang perlu perhatian khusus. Penting juga untuk mempertimbangkan aspek etika dan privasi data."
      },
      {
        type: "heading",
        text: "Kesimpulan"
      },
      {
        type: "paragraph",
        text: "AI automation bukan lagi tentang 'jika' tetapi 'kapan' dan 'bagaimana'. Bisnis yang tidak mengadopsi AI akan tertinggal dari kompetitor yang lebih agile. Kuncinya adalah memulai dengan langkah kecil, belajar dari hasil, dan scale secara bertahap."
      }
    ]
  }
}

export default function BlogDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const blog = blogData[slug]

  if (!blog) {
    return (
      <>
        <Navbar />
        <main className="overflow-hidden pt-20 min-h-screen">
          <div className="mx-auto max-w-4xl px-4 py-20 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Tidak Ditemukan</h1>
            <p className="text-gray-600 mb-8">Artikel yang Anda cari tidak ditemukan.</p>
              <Link
                href="/#blog"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
              >
              <ArrowLeft size={20} />
              Kembali ke Blog
            </Link>
          </div>
        </main>
        <Footer />
        <WhatsAppWidget />
      </>
    )
  }

  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-20">
        <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 py-12 lg:py-16">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent)]"></div>
          </div>
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Link
                href="/#blog"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <ArrowLeft size={20} />
                <span className="font-medium">Kembali ke Blog</span>
              </Link>
            </motion.div>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white">
                <Tag size={14} />
                {blog.category}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            >
              {blog.title}
            </motion.h1>

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-6 text-white/80"
            >
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{blog.readTime} baca</span>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="relative -mt-8 lg:-mt-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src={blog.image || "/placeholder.svg"}
                alt={blog.title}
                className="w-full aspect-video object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Content */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="prose prose-lg max-w-none"
            >
              {blog.content.map((block, index) => {
                switch (block.type) {
                  case "heading":
                    return (
                      <h2 
                        key={index} 
                        className="text-2xl font-bold text-gray-900 mt-8 mb-4 first:mt-0"
                      >
                        {block.text}
                      </h2>
                    )
                  case "paragraph":
                    return (
                      <p 
                        key={index} 
                        className="text-gray-700 leading-relaxed mb-6"
                      >
                        {block.text}
                      </p>
                    )
                  case "list":
                    return (
                      <ul key={index} className="list-none space-y-3 my-6">
                        {block.items?.map((item, itemIndex) => (
                          <li 
                            key={itemIndex} 
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <span className="mt-1.5 h-2 w-2 rounded-full bg-blue-600 shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )
                  case "quote":
                    return (
                      <blockquote 
                        key={index} 
                        className="relative my-8 pl-6 border-l-4 border-blue-600 bg-blue-50 py-6 pr-6 rounded-r-2xl italic text-gray-700"
                      >
                        <p className="m-0">{block.text}</p>
                      </blockquote>
                    )
                  default:
                    return null
                }
              })}
            </motion.article>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-16 p-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Ingin Mewujudkan Ide Digital Anda?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Tim KAMIDUKUNG siap membantu Anda mengimplementasikan solusi teknologi terbaik untuk bisnis Anda.
              </p>
              <a
                href="https://wa.me/6281536164746"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                Hubungi Kami
                <ArrowLeft size={18} className="rotate-180" />
              </a>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-12 flex justify-center"
            >
              <Link
                href="/#blog"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium"
              >
                <ArrowLeft size={20} />
                Lihat Semua Artikel
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
