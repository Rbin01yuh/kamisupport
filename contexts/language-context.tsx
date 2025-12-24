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
    "nav.cta": "Mulai Digitalisasi",

    // Hero
    "hero.badge": "Platform & Agensi Teknologi Modern",
    "hero.title1": "Mendukung Digitalisasi",
    "hero.title2": "Untuk Bisnis Siapa Pun",
    "hero.subtitle":
      "Dari UMKM hingga Enterprise, kami hadir sebagai partner digital Anda. Teknologi tanpa batas, solusi tanpa kompromi.",
    "hero.cta1": "Mulai Sekarang",
    "hero.cta2": "Lihat Portfolio",
    "hero.trusted": "Dipercaya oleh",

    // Services
    "services.badge": "Layanan Kami",
    "services.title": "Solusi Digital Terlengkap",
    "services.subtitle": "Kami menyediakan berbagai layanan untuk mendukung transformasi digital bisnis Anda",
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
    "about.title": "Partner Digital Terpercaya Anda",
    "about.subtitle":
      "KAMIDUKUNG hadir sebagai solusi lengkap untuk transformasi digital bisnis Anda. Dengan tim berpengalaman dan teknologi terkini, kami siap mendukung pertumbuhan bisnis Anda.",
    "about.projects": "Proyek Selesai",
    "about.clients": "Klien Aktif",
    "about.satisfaction": "Kepuasan Klien",
    "about.experience": "Tahun Pengalaman",

    // Why Us
    "whyus.badge": "Mengapa Kami",
    "whyus.title": "Kenapa Memilih KAMIDUKUNG?",
    "whyus.subtitle": "Kami tidak hanya membangun produk, tapi partnership jangka panjang dengan klien",
    "whyus.quality.title": "Kualitas Terjamin",
    "whyus.quality.desc": "Code berkualitas tinggi, testing menyeluruh, dan dokumentasi lengkap.",
    "whyus.agile.title": "Agile Development",
    "whyus.agile.desc": "Metodologi pengembangan gesit dengan iterasi cepat dan feedback berkala.",
    "whyus.support.title": "Support 24/7",
    "whyus.support.desc": "Tim support kami siap membantu Anda kapan saja, di mana saja.",
    "whyus.security.title": "Security First",
    "whyus.security.desc": "Keamanan data dan aplikasi adalah prioritas utama kami.",

    // Pricing
    "pricing.badge": "Harga",
    "pricing.title": "Paket untuk Setiap Kebutuhan",
    "pricing.subtitle": "Pilih paket yang sesuai dengan kebutuhan bisnis Anda",
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

    // Contact
    "contact.badge": "Hubungi Kami",
    "contact.title": "Mari Diskusikan Proyek Anda",
    "contact.subtitle": "Tim kami siap membantu mewujudkan ide digital Anda",
    "contact.name": "Nama Lengkap",
    "contact.email": "Email",
    "contact.phone": "Nomor Telepon",
    "contact.message": "Pesan",
    "contact.submit": "Kirim Pesan",
    "contact.office": "Kantor Kami",
    "contact.hours": "Jam Kerja",
    "contact.hours.value": "Senin - Jumat, 09:00 - 18:00",

    // Footer
    "footer.about.title": "Tentang KAMIDUKUNG",
    "footer.about.desc": "Platform dan agensi teknologi modern yang mendukung digitalisasi untuk bisnis siapa pun.",
    "footer.services.title": "Layanan",
    "footer.company.title": "Perusahaan",
    "footer.support.title": "Dukungan",
    "footer.rights": "Hak Cipta Dilindungi",

    // Partnership
    "partnership.badge": "Mitra Kami",
    "partnership.title1": "Dipercaya oleh",
    "partnership.title2": "Partner Terbaik",
    "partnership.subtitle":
      "Kami bangga bekerja sama dengan berbagai perusahaan terkemuka untuk memberikan solusi digital terbaik",
    "partnership.cta.title": "Ingin Menjadi Mitra Kami?",
    "partnership.cta.subtitle":
      "Bergabunglah dengan ekosistem partner kami dan mari bersama-sama tumbuh memberikan solusi digital terbaik",
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
    "nav.cta": "Start Digital Transformation",

    // Hero
    "hero.badge": "Modern Technology Platform & Agency",
    "hero.title1": "Supporting Digitalization",
    "hero.title2": "For Any Business",
    "hero.subtitle":
      "From SMEs to Enterprise, we are here as your digital partner. Unlimited technology, uncompromised solutions.",
    "hero.cta1": "Get Started",
    "hero.cta2": "View Portfolio",
    "hero.trusted": "Trusted by",

    // Services
    "services.badge": "Our Services",
    "services.title": "Complete Digital Solutions",
    "services.subtitle": "We provide various services to support your business digital transformation",
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
    "about.title": "Your Trusted Digital Partner",
    "about.subtitle":
      "KAMIDUKUNG provides complete solutions for your business digital transformation. With experienced team and latest technology, we're ready to support your business growth.",
    "about.projects": "Completed Projects",
    "about.clients": "Active Clients",
    "about.satisfaction": "Client Satisfaction",
    "about.experience": "Years of Experience",

    // Why Us
    "whyus.badge": "Why Us",
    "whyus.title": "Why Choose KAMIDUKUNG?",
    "whyus.subtitle": "We don't just build products, but long-term partnerships with clients",
    "whyus.quality.title": "Quality Assured",
    "whyus.quality.desc": "High-quality code, thorough testing, and complete documentation.",
    "whyus.agile.title": "Agile Development",
    "whyus.agile.desc": "Agile development methodology with fast iterations and regular feedback.",
    "whyus.support.title": "24/7 Support",
    "whyus.support.desc": "Our support team is ready to help you anytime, anywhere.",
    "whyus.security.title": "Security First",
    "whyus.security.desc": "Data and application security is our top priority.",

    // Pricing
    "pricing.badge": "Pricing",
    "pricing.title": "Plans for Every Need",
    "pricing.subtitle": "Choose a plan that fits your business needs",
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

    // Contact
    "contact.badge": "Contact Us",
    "contact.title": "Let's Discuss Your Project",
    "contact.subtitle": "Our team is ready to help bring your digital ideas to life",
    "contact.name": "Full Name",
    "contact.email": "Email",
    "contact.phone": "Phone Number",
    "contact.message": "Message",
    "contact.submit": "Send Message",
    "contact.office": "Our Office",
    "contact.hours": "Business Hours",
    "contact.hours.value": "Monday - Friday, 09:00 AM - 06:00 PM",

    // Footer
    "footer.about.title": "About KAMIDUKUNG",
    "footer.about.desc": "Modern technology platform and agency supporting digitalization for any business.",
    "footer.services.title": "Services",
    "footer.company.title": "Company",
    "footer.support.title": "Support",
    "footer.rights": "All Rights Reserved",

    // Partnership
    "partnership.badge": "Our Partners",
    "partnership.title1": "Trusted by",
    "partnership.title2": "Leading Partners",
    "partnership.subtitle":
      "We're proud to collaborate with various leading companies to deliver the best digital solutions",
    "partnership.cta.title": "Want to Become Our Partner?",
    "partnership.cta.subtitle":
      "Join our partner ecosystem and let's grow together delivering the best digital solutions",
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
    return translations[language][key] || key
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
