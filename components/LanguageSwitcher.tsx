'use client'

import { usePathname, useRouter } from 'next/navigation'
import { locales, type Locale } from '../i18n/settings'
import { useTranslation } from '../i18n/TranslationProvider'

export default function LanguageSwitcher() {
  const { locale } = useTranslation()
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split('/')
    segments[1] = newLocale
    router.push(segments.join('/'))
  }

  return (
    <div className="flex items-center gap-1">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLocale(loc)}
          className={`px-2 py-1 text-xs rounded-md transition ${
            loc === locale
              ? 'bg-white text-black font-bold'
              : 'text-white/70 hover:text-white hover:bg-white/10'
          }`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
