'use client'

import './globals.css'
import { Cairo, Plus_Jakarta_Sans } from 'next/font/google'
import { useState, createContext, useContext, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const cairo = Cairo({ 
  subsets: ['arabic', 'latin'],
  variable: '--font-cairo',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900']
})

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800']
})

type Lang = 'ar' | 'en'

interface LangContextType {
  lang: Lang
  setLang: (l: Lang) => void
  t: (ar: string, en: string) => string
  dir: 'rtl' | 'ltr'
}

export const LangContext = createContext<LangContextType>({
  lang: 'ar',
  setLang: () => {},
  t: (ar) => ar,
  dir: 'rtl',
})

export const useLang = () => useContext(LangContext)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [lang, setLang] = useState<Lang>('ar')
  const [dark, setDark] = useState(false)

  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  const t = (ar: string, en: string) => lang === 'ar' ? ar : en

  useEffect(() => {
    document.documentElement.dir = dir
    document.body.classList.toggle('lang-en', lang === 'en')
    document.documentElement.lang = lang
  }, [lang, dir])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <html lang={lang} dir={dir} className={dark ? 'dark' : ''}>
      <head>
        <title>ترياق | منصة الرعاية الصحية</title>
        <meta name="description" content="ترياق - منصة رقمية تساعدك في إيجاد الطبيب المناسب، حجز المواعيد، والدفع أونلاين. الحل الذكي لخدمات الرعاية الصحية في مصر." />
        <meta name="keywords" content="ترياق, حجز مواعيد طبية, عيادات, دكتور, رعاية صحية, مصر, الإسماعيلية" />
        <meta property="og:title" content="ترياق | منصة الرعاية الصحية" />
        <meta property="og:description" content="احجز طبيبك في ثوانٍ. ترياق — الترياق من فوضى الرعاية الصحية." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${cairo.variable} ${plusJakarta.variable} antialiased`}>
        <LangContext.Provider value={{ lang, setLang, t, dir }}>
          <Navbar dark={dark} setDark={setDark} />
          <main>{children}</main>
          <Footer />
        </LangContext.Provider>
      </body>
    </html>
  )
}
