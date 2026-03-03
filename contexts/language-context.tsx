"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "id" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  id: {
    // Navbar
    "nav.home": "Beranda",
    "nav.about": "Tentang",
    "nav.services": "Layanan",
    "nav.pricing": "Harga",
    "nav.blog": "Blog",
    "nav.whyus": "Mengapa Kami",
    "nav.team": "Tim",
    "nav.faq": "FAQ",
    "nav.contact": "Kontak",
    "nav.cta": "Hubungi Kami",

    // Hero
    "hero.badge": "Teknologi • Internet • Jasa Akademik",
    "hero.title1": "Solusi Lengkap",
    "hero.title2": "Untuk Semua Kebutuhan Anda",
    "hero.subtitle":
      "Dari layanan internet RT/RW Net, pengembangan teknologi digital, hingga jasa akademik — kami hadir sebagai partner terpercaya Anda.",
    "hero.cta1": "Mulai Sekarang",
    "hero.cta2": "Lihat Portfolio",
    "hero.trusted": "Dipercaya oleh",

    // Services
    "services.badge": "Layanan Kami",
    "services.title": "Semua Layanan dalam Satu Platform",
    "services.subtitle": "Kami menyediakan berbagai layanan mulai dari internet, teknologi digital, hingga jasa akademik",
    "services.internet.title": "Internet RT/RW Net",
    "services.internet.desc": "Layanan internet cepat, stabil, dan terjangkau untuk rumah tangga dan usaha kecil di wilayah Anda.",
    "services.joki.title": "Joki Skripsi & Project",
    "services.joki.desc": "Jasa pengerjaan skripsi, tugas akhir, project web/mobile, dan lainnya dengan hasil berkualitas.",
    "services.web.title": "Website & Web App",
    "services.web.desc": "Landing page, company profile, hingga web aplikasi kompleks dengan teknologi terkini.",
    "services.mobile.title": "Mobile App Development",
    "services.mobile.desc": "Aplikasi mobile native & hybrid untuk iOS dan Android dengan UX terbaik.",
    "services.ai.title": "AI & Machine Learning",
    "services.ai.desc": "Implementasi AI, chatbot, computer vision, dan solusi ML untuk bisnis Anda.",
    "services.cloud.title": "Cloud & DevOps",
    "services.cloud.desc": "Migrasi cloud, CI/CD, infrastructure as code, dan optimasi performa.",
    "services.ui.title": "UI/UX Design",
    "services.ui.desc": "Desain antarmuka modern yang user-friendly dan conversion-focused.",
    "services.integration.title": "System Integration",
    "services.integration.desc": "Integrasi sistem, API development, dan automasi proses bisnis.",

    // About
    "about.badge": "Tentang Kami",
    "about.title": "Partner Terpercaya Anda",
    "about.subtitle":
      "KAMIDUKUNG hadir sebagai solusi lengkap — mulai dari penyedia layanan internet RT/RW Net, pengembangan teknologi digital, hingga jasa akademik. Dengan tim berpengalaman, kami siap mendukung kebutuhan Anda.",
    "about.projects": "Proyek Selesai",
    "about.clients": "Klien Aktif",
    "about.satisfaction": "Kepuasan Klien",
    "about.experience": "Tahun Pengalaman",

    // Why Us
    "whyus.badge": "Mengapa Kami",
    "whyus.title": "Kenapa Memilih KAMIDUKUNG?",
    "whyus.subtitle": "Kami tidak hanya membangun produk, tapi partnership jangka panjang dengan klien",
    "whyus.quality.title": "Kualitas Terjamin",
    "whyus.quality.desc": "Hasil berkualitas tinggi dengan standar profesional dan dokumentasi lengkap.",
    "whyus.agile.title": "Proses Cepat",
    "whyus.agile.desc": "Pengerjaan cepat dan efisien dengan update progress secara berkala.",
    "whyus.support.title": "Support Responsif",
    "whyus.support.desc": "Tim support kami siap membantu Anda kapan saja, di mana saja.",
    "whyus.security.title": "Harga Terjangkau",
    "whyus.security.desc": "Layanan berkualitas dengan harga yang bersahabat dan transparan.",

    // Pricing
    "pricing.badge": "Harga Layanan Teknologi",
    "pricing.title": "Paket Layanan Teknologi",
    "pricing.subtitle": "Pilih paket teknologi yang sesuai dengan kebutuhan bisnis Anda",
    "pricing.starter.title": "Starter",
    "pricing.starter.desc": "Cocok untuk UMKM & bisnis kecil yang baru memulai",
    "pricing.starter.price": "5jt - 15jt",
    "pricing.starter.feature1": "Landing Page / Company Profile",
    "pricing.starter.feature2": "Responsive Design",
    "pricing.starter.feature3": "Basic SEO",
    "pricing.starter.feature4": "1 Bulan Support",
    "pricing.professional.title": "Professional",
    "pricing.professional.desc": "Untuk bisnis berkembang yang butuh solusi lebih lengkap",
    "pricing.professional.price": "20jt - 50jt",
    "pricing.professional.feature1": "Web/Mobile Application",
    "pricing.professional.feature2": "Database Integration",
    "pricing.professional.feature3": "API Development",
    "pricing.professional.feature4": "3 Bulan Support",
    "pricing.professional.feature5": "Advanced Analytics",
    "pricing.enterprise.title": "Enterprise",
    "pricing.enterprise.desc": "Solusi custom untuk perusahaan besar",
    "pricing.enterprise.price": "Custom",
    "pricing.enterprise.feature1": "Custom Solution",
    "pricing.enterprise.feature2": "Unlimited Features",
    "pricing.enterprise.feature3": "Dedicated Team",
    "pricing.enterprise.feature4": "1 Tahun Support",
    "pricing.enterprise.feature5": "Priority Support 24/7",
    "pricing.enterprise.feature6": "Cloud Infrastructure",
    "pricing.cta": "Hubungi Kami",

    // Internet Pricing
    "internet.badge": "Paket Internet",
    "internet.title": "Paket Internet RT/RW Net",
    "internet.subtitle": "Koneksi internet cepat, stabil, dan terjangkau untuk rumah dan usaha Anda",
    "internet.perMonth": "/bulan",
    "internet.cta": "Pasang Sekarang",
    "internet.coverage.title": "Area Layanan",
    "internet.coverage.desc": "Saat ini kami melayani wilayah Kutalimbaru, Suka Raya, Glugur, Tuntungan, Tanjung Anom dan sekitarnya.",
    "internet.contact": "Hubungi Kami untuk Informasi & Pemasangan",
    "internet.contactName": "Telepon/WA: 081536164746 (Ridho)",

    // Joki Pricing
    "joki.badge": "Jasa Akademik & Project",
    "joki.title": "Joki Skripsi & Project",
    "joki.subtitle": "Solusi terpercaya untuk kebutuhan akademik dan project Anda dengan hasil berkualitas",
    "joki.startFrom": "Mulai dari",
    "joki.cta": "Konsultasi Gratis",
    "joki.note": "Harga dapat berubah sesuai tingkat kesulitan dan kompleksitas. Hubungi kami untuk konsultasi gratis.",
    "joki.limitedSeats": "KUOTA TERBATAS",

    // Team
    "team.badge": "Tim Kami",
    "team.title": "Bertemu dengan Tim Expert",
    "team.subtitle": "Tim profesional dengan pengalaman dan dedikasi tinggi",

    // Testimonials
    "testimonials.badge": "Testimoni",
    "testimonials.title": "Apa Kata Klien Kami",
    "testimonials.subtitle": "Kepuasan klien adalah prioritas utama kami",

    // Blog
    "blog.badge": "Blog & Insights",
    "blog.title": "Artikel & Tips Terbaru",
    "blog.subtitle": "Pelajari tren teknologi dan best practices terkini",
    "blog.readmore": "Baca Selengkapnya",

    // FAQ
    "faq.badge": "FAQ",
    "faq.title": "Pertanyaan yang Sering Diajukan",
    "faq.subtitle": "Temukan jawaban untuk pertanyaan umum tentang layanan kami",
    "faq.q1.question": "Apa itu layanan RT/RW Net?",
    "faq.q1.answer": "RT/RW Net adalah layanan internet berbasis komunitas yang kami sediakan untuk wilayah perumahan dan usaha kecil. Kami menyediakan koneksi internet cepat, stabil, dan terjangkau dengan paket mulai dari 10 Mbps hingga 20 Mbps.",
    "faq.q2.question": "Wilayah mana saja yang dicover untuk layanan internet?",
    "faq.q2.answer": "Saat ini kami melayani wilayah Kutalimbaru, Suka Raya, Glugur, Tuntungan, Tanjung Anom dan sekitarnya. Kami terus memperluas jangkauan layanan kami. Hubungi kami untuk mengecek ketersediaan di wilayah Anda.",
    "faq.q3.question": "Bagaimana proses pemasangan internet?",
    "faq.q3.answer": "Proses pemasangan sangat mudah: (1) Hubungi kami via WhatsApp, (2) Tim kami akan survei lokasi, (3) Pemasangan dilakukan dalam 1-3 hari kerja, (4) Nikmati internet cepat di rumah/usaha Anda. Biaya pemasangan gratis untuk pelanggan baru!",
    "faq.q4.question": "Apa saja layanan joki yang tersedia?",
    "faq.q4.answer": "Kami menyediakan berbagai layanan joki meliputi: Joki Skripsi (full atau per-BAB), Joki Project Web/App, Joki Project Mobile App, Joki Tugas/Makalah, dan Joki UI/UX Design. Semua dikerjakan oleh tim profesional dengan hasil berkualitas.",
    "faq.q5.question": "Berapa lama waktu pengerjaan joki skripsi?",
    "faq.q5.answer": "Waktu pengerjaan tergantung tingkat kesulitan. Untuk skripsi per-BAB sekitar 3-5 hari, sedangkan skripsi full sekitar 2-4 minggu. Kami selalu memberikan update progress secara berkala dan menerima revisi sesuai kebutuhan.",
    "faq.q6.question": "Apakah ada garansi untuk joki project?",
    "faq.q6.answer": "Ya, kami memberikan garansi revisi untuk semua layanan joki. Jika hasil tidak sesuai brief atau ada revisi dari dosen/pembimbing, kami akan memperbaikinya. Kepuasan Anda adalah prioritas kami.",
    "faq.q7.question": "Berapa lama waktu pengerjaan project teknologi?",
    "faq.q7.answer": "Waktu pengerjaan tergantung kompleksitas project. Untuk website company profile sekitar 2-4 minggu, aplikasi web/mobile 2-3 bulan, dan project enterprise custom bisa 3-6 bulan. Kami selalu memberikan timeline yang jelas di awal project.",
    "faq.q8.question": "Bagaimana proses pembayaran?",
    "faq.q8.answer": "Untuk layanan internet, pembayaran dilakukan bulanan. Untuk layanan joki dan teknologi, pembayaran bisa dilakukan secara bertahap sesuai kesepakatan. Kami menerima berbagai metode pembayaran termasuk transfer bank dan e-wallet.",

    // Contact
    "contact.badge": "Hubungi Kami",
    "contact.title1": "Hubungi",
    "contact.title2": "Kami",
    "contact.subtitle": "Siap membantu mewujudkan kebutuhan Anda. Mari berdiskusi!",
    "contact.info.title": "Informasi Kontak",
    "contact.info.desc": "Jangan ragu untuk menghubungi kami. Tim kami siap membantu Anda 24/7.",
    "contact.name": "Nama Lengkap",
    "contact.name.placeholder": "Nama Anda",
    "contact.email": "Email",
    "contact.email.placeholder": "email@example.com",
    "contact.phone": "Nomor Telepon",
    "contact.phone.placeholder": "+62 812-3456-7890",
    "contact.message": "Pesan",
    "contact.message.placeholder": "Ceritakan tentang kebutuhan Anda...",
    "contact.submit": "Kirim Pesan",
    "contact.location": "Lokasi",
    "contact.follow": "Ikuti Kami",
    "contact.office": "Kantor Kami",
    "contact.hours": "Jam Kerja",
    "contact.hours.value": "Senin - Jumat, 09:00 - 18:00",

    // Footer
    "footer.about.title": "Tentang KAMIDUKUNG",
    "footer.about.desc": "Penyedia layanan internet, teknologi digital, dan jasa akademik terpercaya.",
    "footer.services.title": "Layanan",
    "footer.company.title": "Perusahaan",
    "footer.support.title": "Dukungan",
    "footer.rights": "Hak Cipta Dilindungi",
    "footer.joki": "Joki Skripsi & Project",
    "footer.about.link": "Tentang Kami",
    "footer.team": "Tim",
    "footer.contact": "Kontak",

    // Partnership
    "partnership.badge": "Mitra Kami",
    "partnership.title1": "Dipercaya oleh",
    "partnership.title2": "Partner Terbaik",
    "partnership.subtitle":
      "Kami bangga bekerja sama dengan berbagai pihak untuk memberikan layanan terbaik",
    "partnership.cta.title": "Ingin Menjadi Mitra Kami?",
    "partnership.cta.subtitle":
      "Bergabunglah dengan ekosistem partner kami dan mari bersama-sama tumbuh memberikan solusi terbaik",
    "partnership.cta.button": "Hubungi Tim Partnership",
  },
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.pricing": "Pricing",
    "nav.blog": "Blog",
    "nav.whyus": "Why Us",
    "nav.team": "Team",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.cta": "Contact Us",

    // Hero
    "hero.badge": "Technology • Internet • Academic Services",
    "hero.title1": "Complete Solutions",
    "hero.title2": "For All Your Needs",
    "hero.subtitle":
      "From RT/RW Net internet services, digital technology development, to academic services — we are your trusted partner.",
    "hero.cta1": "Get Started",
    "hero.cta2": "View Portfolio",
    "hero.trusted": "Trusted by",

    // Services
    "services.badge": "Our Services",
    "services.title": "All Services in One Platform",
    "services.subtitle": "We provide various services from internet, digital technology, to academic services",
    "services.internet.title": "Internet RT/RW Net",
    "services.internet.desc": "Fast, stable, and affordable internet service for households and small businesses in your area.",
    "services.joki.title": "Thesis & Project Services",
    "services.joki.desc": "Thesis writing, final projects, web/mobile project development, and more with quality results.",
    "services.web.title": "Website & Web App",
    "services.web.desc": "Landing pages, company profiles, to complex web applications with latest technology.",
    "services.mobile.title": "Mobile App Development",
    "services.mobile.desc": "Native & hybrid mobile applications for iOS and Android with best UX.",
    "services.ai.title": "AI & Machine Learning",
    "services.ai.desc": "AI implementation, chatbots, computer vision, and ML solutions for your business.",
    "services.cloud.title": "Cloud & DevOps",
    "services.cloud.desc": "Cloud migration, CI/CD, infrastructure as code, and performance optimization.",
    "services.ui.title": "UI/UX Design",
    "services.ui.desc": "Modern, user-friendly, and conversion-focused interface design.",
    "services.integration.title": "System Integration",
    "services.integration.desc": "System integration, API development, and business process automation.",

    // About
    "about.badge": "About Us",
    "about.title": "Your Trusted Partner",
    "about.subtitle":
      "KAMIDUKUNG provides complete solutions — from RT/RW Net internet services, digital technology development, to academic services. With our experienced team, we're ready to support your needs.",
    "about.projects": "Completed Projects",
    "about.clients": "Active Clients",
    "about.satisfaction": "Client Satisfaction",
    "about.experience": "Years of Experience",

    // Why Us
    "whyus.badge": "Why Us",
    "whyus.title": "Why Choose KAMIDUKUNG?",
    "whyus.subtitle": "We don't just build products, but long-term partnerships with clients",
    "whyus.quality.title": "Quality Assured",
    "whyus.quality.desc": "High-quality results with professional standards and complete documentation.",
    "whyus.agile.title": "Fast Process",
    "whyus.agile.desc": "Fast and efficient work with regular progress updates.",
    "whyus.support.title": "Responsive Support",
    "whyus.support.desc": "Our support team is ready to help you anytime, anywhere.",
    "whyus.security.title": "Affordable Pricing",
    "whyus.security.desc": "Quality services with friendly and transparent pricing.",

    // Pricing
    "pricing.badge": "Tech Service Pricing",
    "pricing.title": "Technology Service Plans",
    "pricing.subtitle": "Choose a technology plan that fits your business needs",
    "pricing.starter.title": "Starter",
    "pricing.starter.desc": "Perfect for SMEs & small businesses just getting started",
    "pricing.starter.price": "$300 - $1000",
    "pricing.starter.feature1": "Landing Page / Company Profile",
    "pricing.starter.feature2": "Responsive Design",
    "pricing.starter.feature3": "Basic SEO",
    "pricing.starter.feature4": "1 Month Support",
    "pricing.professional.title": "Professional",
    "pricing.professional.desc": "For growing businesses needing more comprehensive solutions",
    "pricing.professional.price": "$1,300 - $3,300",
    "pricing.professional.feature1": "Web/Mobile Application",
    "pricing.professional.feature2": "Database Integration",
    "pricing.professional.feature3": "API Development",
    "pricing.professional.feature4": "3 Months Support",
    "pricing.professional.feature5": "Advanced Analytics",
    "pricing.enterprise.title": "Enterprise",
    "pricing.enterprise.desc": "Custom solutions for large companies",
    "pricing.enterprise.price": "Custom",
    "pricing.enterprise.feature1": "Custom Solution",
    "pricing.enterprise.feature2": "Unlimited Features",
    "pricing.enterprise.feature3": "Dedicated Team",
    "pricing.enterprise.feature4": "1 Year Support",
    "pricing.enterprise.feature5": "Priority Support 24/7",
    "pricing.enterprise.feature6": "Cloud Infrastructure",
    "pricing.cta": "Contact Us",

    // Internet Pricing
    "internet.badge": "Internet Plans",
    "internet.title": "RT/RW Net Internet Plans",
    "internet.subtitle": "Fast, stable, and affordable internet connection for your home and business",
    "internet.perMonth": "/month",
    "internet.cta": "Subscribe Now",
    "internet.coverage.title": "Service Area",
    "internet.coverage.desc": "We currently serve the areas of Kutalimbaru, Suka Raya, Glugur, Tuntungan, Tanjung Anom and surrounding areas.",
    "internet.contact": "Contact Us for Information & Installation",
    "internet.contactName": "Phone/WA: 081536164746 (Ridho)",

    // Joki Pricing
    "joki.badge": "Academic & Project Services",
    "joki.title": "Thesis & Project Services",
    "joki.subtitle": "Trusted solutions for your academic and project needs with quality results",
    "joki.startFrom": "Starting from",
    "joki.cta": "Free Consultation",
    "joki.note": "Prices may vary depending on difficulty and complexity. Contact us for free consultation.",
    "joki.limitedSeats": "LIMITED SEATS",

    // Team
    "team.badge": "Our Team",
    "team.title": "Meet Our Expert Team",
    "team.subtitle": "Professional team with high experience and dedication",

    // Testimonials
    "testimonials.badge": "Testimonials",
    "testimonials.title": "What Our Clients Say",
    "testimonials.subtitle": "Client satisfaction is our top priority",

    // Blog
    "blog.badge": "Blog & Insights",
    "blog.title": "Latest Articles & Tips",
    "blog.subtitle": "Learn about latest technology trends and best practices",
    "blog.readmore": "Read More",

    // FAQ
    "faq.badge": "FAQ",
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Find answers to common questions about our services",
    "faq.q1.question": "What is RT/RW Net service?",
    "faq.q1.answer": "RT/RW Net is a community-based internet service we provide for residential areas and small businesses. We provide fast, stable, and affordable internet connections with plans ranging from 10 Mbps to 20 Mbps.",
    "faq.q2.question": "Which areas are covered for internet service?",
    "faq.q2.answer": "We currently serve the areas of Kutalimbaru, Suka Raya, Glugur, Tuntungan, Tanjung Anom and surrounding areas. We are continuously expanding our service coverage. Contact us to check availability in your area.",
    "faq.q3.question": "What is the internet installation process?",
    "faq.q3.answer": "The installation process is very easy: (1) Contact us via WhatsApp, (2) Our team will survey the location, (3) Installation is done within 1-3 working days, (4) Enjoy fast internet in your home/business. Installation is free for new customers!",
    "faq.q4.question": "What thesis/project services are available?",
    "faq.q4.answer": "We provide various services including: Thesis Writing (full or per-chapter), Web/App Project, Mobile App Project, Assignment/Paper, and UI/UX Design. All are done by a professional team with quality results.",
    "faq.q5.question": "How long does thesis writing take?",
    "faq.q5.answer": "Processing time depends on difficulty. For per-chapter thesis it takes about 3-5 days, while full thesis takes about 2-4 weeks. We always provide regular progress updates and accept revisions as needed.",
    "faq.q6.question": "Is there a warranty for project services?",
    "faq.q6.answer": "Yes, we provide revision warranty for all services. If the result doesn't match the brief or there are revisions from advisors, we will fix it. Your satisfaction is our priority.",
    "faq.q7.question": "How long does technology project development take?",
    "faq.q7.answer": "Development time depends on project complexity. For company profile websites it takes about 2-4 weeks, web/mobile applications 2-3 months, and custom enterprise projects can take 3-6 months. We always provide a clear timeline at the beginning of the project.",
    "faq.q8.question": "What is the payment process?",
    "faq.q8.answer": "For internet services, payment is made monthly. For thesis and technology services, payment can be made in stages according to agreement. We accept various payment methods including bank transfer and e-wallets.",

    // Contact
    "contact.badge": "Contact Us",
    "contact.title1": "Contact",
    "contact.title2": "Us",
    "contact.subtitle": "Ready to help with all your needs. Let's discuss!",
    "contact.info.title": "Contact Information",
    "contact.info.desc": "Don't hesitate to contact us. Our team is ready to help you 24/7.",
    "contact.name": "Full Name",
    "contact.name.placeholder": "Your Name",
    "contact.email": "Email",
    "contact.email.placeholder": "email@example.com",
    "contact.phone": "Phone Number",
    "contact.phone.placeholder": "+62 812-3456-7890",
    "contact.message": "Message",
    "contact.message.placeholder": "Tell us about your needs...",
    "contact.submit": "Send Message",
    "contact.location": "Location",
    "contact.follow": "Follow Us",
    "contact.office": "Our Office",
    "contact.hours": "Business Hours",
    "contact.hours.value": "Monday - Friday, 09:00 AM - 06:00 PM",

    // Footer
    "footer.about.title": "About KAMIDUKUNG",
    "footer.about.desc": "Trusted internet, digital technology, and academic service provider.",
    "footer.services.title": "Services",
    "footer.company.title": "Company",
    "footer.support.title": "Support",
    "footer.rights": "All Rights Reserved",
    "footer.joki": "Thesis & Project",
    "footer.about.link": "About Us",
    "footer.team": "Team",
    "footer.contact": "Contact",

    // Partnership
    "partnership.badge": "Our Partners",
    "partnership.title1": "Trusted by",
    "partnership.title2": "Leading Partners",
    "partnership.subtitle":
      "We're proud to collaborate with various parties to deliver the best services",
    "partnership.cta.title": "Want to Become Our Partner?",
    "partnership.cta.subtitle":
      "Join our partner ecosystem and let's grow together delivering the best solutions",
    "partnership.cta.button": "Contact Partnership Team",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id")

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "id" || saved === "en")) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return (translations[language] as Record<string, string>)[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
