"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const menuItems = [
    { name: t("nav.home"), href: "#home" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.services"), href: "#services" },
    { name: t("nav.pricing"), href: "#pricing" },
    { name: t("nav.blog"), href: "#blog" },
    { name: t("nav.whyus"), href: "#why-us" },
    { name: t("nav.team"), href: "#team" },
    { name: t("nav.faq"), href: "#faq" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/80 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <Image
              src="/pictures/kamidukung.png"
              alt="KAMIDUKUNG Logo"
              width={180}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-8 lg:flex">
            {menuItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="relative text-sm font-medium text-gray-700 transition-colors hover:text-blue-600"
                whileHover={{ y: -2 }}
              >
                {item.name}
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-blue-500 to-blue-700"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <LanguageSwitcher />
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open('https://wa.me/6281536164746?text=' + encodeURIComponent('Halo KAMIDUKUNG! Saya ingin memulai digitalisasi bisnis saya.'), '_blank')}
              >
                {t("nav.cta")}
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t bg-white/95 backdrop-blur-lg lg:hidden"
        >
          <div className="space-y-1 px-4 pb-4 pt-2">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600"
              >
                {item.name}
              </a>
            ))}
            <div className="flex justify-center pt-2 pb-2">
              <LanguageSwitcher />
            </div>
            <Button 
              className="mt-4 w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white" 
              size="lg"
              onClick={() => window.open('https://wa.me/6281536164746?text=' + encodeURIComponent('Halo KAMIDUKUNG! Saya ingin memulai digitalisasi bisnis saya.'), '_blank')}
            >
              {t("nav.cta")}
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
