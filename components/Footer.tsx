'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Heart } from 'lucide-react'
import { useLang } from '@/app/layout'
import Image from 'next/image'

export default function Footer() {
  const { t, lang } = useLang()

  const links: {
    company: { href: string; label: string }[]
    legal: { href: string; label: string }[]
  } = {
    company: [
      { href: '/', label: t('الرئيسية', 'Home') },
      { href: '/about', label: t('من نحن', 'About Us') },
      { href: '/how-it-works', label: t('كيف يعمل', 'How It Works') },
      { href: '/contact', label: t('تواصل معنا', 'Contact') },
    ],
    legal: [
      /*{ href: '/privacy', label: t('سياسة الخصوصية', 'Privacy Policy') },
      { href: '/terms', label: t('الشروط والأحكام', 'Terms of Service') },*/
    ]
  }

  return (
    <footer className="bg-neutral-900 dark:bg-neutral-950 text-white pt-16 pb-8">
      <div className="container-custom mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4">
  <div className="relative h-14 w-40">
    <Image
      src="/logo.png"
      alt={t('ترياق', 'Tiryaq')}
      fill
      className="object-contain object-left"
    />
  </div>
</div>
            <p className="text-neutral-400 leading-relaxed mb-6 max-w-sm">
              {t(
                'ترياق هو الترياق لرعاية صحية افضل. نحن نجعل الوصول إلى الطبيب بسيطاً وإنسانياً وميسور التكلفة.',
                'Tiryaq is the antidote to better healthcare. We make accessing medical care simple, humane, and affordable.'
              )}
            </p>
            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Instagram, href: '#' },
                { icon: Linkedin, href: '#' },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary-500 hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t('الشركة', 'Company')}</h3>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t('تواصل معنا', 'Contact Us')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-neutral-400">
                <Mail size={14} className="text-primary-400 shrink-0" />
                <a href="mailto:hello@tiryaq.com" className="hover:text-primary-400 transition-colors">
                  hello@tiryaq.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-neutral-400">
                <Phone size={14} className="text-primary-400 shrink-0" />
                <a href="tel:+201000000000" className="hover:text-primary-400 transition-colors">
                  +20 100 000 0000
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-neutral-400">
                <MapPin size={14} className="text-primary-400 shrink-0 mt-0.5" />
                <span>{t(' مصر', ' Egypt')}</span>
              </li>
            </ul>

            {/* Legal */}
            <div className="mt-6">
              <ul className="space-y-2">
                {links.legal.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-500 hover:text-neutral-300 transition-colors duration-200 text-xs"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        

        {/* Bottom */}
        {/*
        <div className="border-t border-neutral-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-neutral-500 text-sm flex items-center gap-1.5">
            {t('صُنع بـ', 'Made with')}
            <Heart size={12} className="text-red-400 fill-red-400" />
            {t('في مصر © 2025 ترياق', 'in Egypt © 2025 Tiryaq')}
          </p>
          <p className="text-neutral-600 text-xs">
            {t('جميع الحقوق محفوظة', 'All rights reserved')}
          </p>
        </div>
        */}
      </div>
    </footer>
  )
}
