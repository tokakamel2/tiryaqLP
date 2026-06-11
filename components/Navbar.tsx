'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Moon, Sun, Globe } from 'lucide-react'
import { useLang } from '@/app/layout'
import Image from 'next/image'

interface NavbarProps {
  dark: boolean
  setDark: (d: boolean) => void
}

const navLinks = {
  ar: [
    { href: '/', label: 'الرئيسية' },
    { href: '/about', label: 'من نحن' },
    { href: '/how-it-works', label: 'كيف يعمل' },
    { href: '/contact', label: 'تواصل معنا' },
  ],
  en: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/contact', label: 'Contact' },
  ]
}

export default function Navbar({ dark, setDark }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = lang === 'ar' ? navLinks.ar : navLinks.en

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-soft py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
  <div className="relative h-12 w-36">
    <Image
      src="/logo.png"
      alt={t('ترياق', 'Tiryaq')}
      fill
      className="object-contain object-right"
      priority
    />
  </div>
</Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-neutral-600 dark:text-neutral-300 hover:text-primary-500 font-medium transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 inset-x-0 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
            </Link>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 text-sm font-medium text-neutral-600 dark:text-neutral-300 hover:border-primary-300 hover:text-primary-500 transition-all duration-200"
          >
            <Globe size={14} />
            {lang === 'ar' ? 'EN' : 'عر'}
          </button>

          {/* Dark Mode */}
          <button
            onClick={() => setDark(!dark)}
            className="w-9 h-9 rounded-lg flex items-center justify-center border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:border-primary-300 hover:text-primary-500 transition-all duration-200"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* CTA */}
          <Link
            href="/contact"
            className="hidden md:block btn-primary text-sm py-2.5"
          >
            {t('احجز الآن', 'Book Now')}
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="glass border-t border-neutral-200 dark:border-neutral-700 px-4 py-4 flex flex-col gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-xl text-neutral-700 dark:text-neutral-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-500 font-medium transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary text-center mt-2"
          >
            {t('احجز الآن', 'Book Now')}
          </Link>
        </nav>
      </div>
    </header>
  )
}
