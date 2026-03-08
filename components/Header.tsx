'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useTranslation } from '../i18n/TranslationProvider'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const { t, locale } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: `/${locale}`, label: t('nav.home') },
    { href: `/${locale}/xidmetler`, label: t('nav.services') },
    { href: `/${locale}/mehsullar`, label: t('nav.products') },
    { href: `/${locale}/haqqimizda`, label: t('nav.aboutUs') },
  ]

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 md:px-5">
      <div className="mx-auto w-full max-w-7xl rounded-2xl border border-white/15 bg-zinc-950/90 shadow-lg backdrop-blur">
        <div className="flex items-center justify-between px-4 py-3 md:px-6">
          <Link href={`/${locale}`} className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <Image
              src="/logoLight.png"
              className="rounded-full"
              alt={t('nav.home')}
              width={48}
              height={48}
            />
            <span className="text-sm font-bold text-white min-[1025px]:text-base">Rabbit Site</span>
          </Link>

          <nav className="hidden items-center gap-6 min-[768px]:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-white/85 transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 min-[768px]:flex">
            <LanguageSwitcher />
            <Link
              href={`/${locale}/elaqe`}
              className="rounded-xl bg-amber-400 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-amber-300"
            >
              {t('nav.contactButton')}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-lg border border-white/20 px-3 py-2 text-xs font-semibold text-white min-[768px]:hidden"
            aria-expanded={isOpen}
            aria-label={isOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          >
            {isOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          </button>
        </div>

        {isOpen && (
          <div className="space-y-2 border-t border-white/15 px-4 py-4 min-[768px]:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-white/90 transition hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-2">
              <LanguageSwitcher />
            </div>

            <Link
              href={`/${locale}/elaqe`}
              className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-amber-300"
              onClick={() => setIsOpen(false)}
            >
              {t('nav.contactButton')}
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
