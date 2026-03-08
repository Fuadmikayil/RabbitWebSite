// components/Footer.tsx
'use client'

import Link from 'next/link'
import { useTranslation } from '../i18n/TranslationProvider'

const Footer = () => {
  const { t, locale } = useTranslation()

  return (
    <footer className="mt-8 border-t border-zinc-200 bg-zinc-950 px-4 py-10 text-white md:px-6 md:py-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 min-[1025px]:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold">Rabbit Site</h3>
          <p className="mt-3 text-sm text-zinc-300">{t('footer.description')}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-200">{t('footer.socialTitle')}</h4>
          <div className="mt-3 space-y-2 text-sm text-zinc-300">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="block hover:text-white">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="block hover:text-white">Facebook</a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="block hover:text-white">X</a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-200">{t('footer.contactTitle')}</h4>
          <div className="mt-3 space-y-2 text-sm text-zinc-300">
            <a href="tel:+994500000000" className="block hover:text-white">+994 50 000 00 00</a>
            <a href="mailto:info@rabbitsite.az" className="block hover:text-white">info@rabbitsite.az</a>
            <p>Baki, Azerbaijan</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-zinc-200">{t('footer.legalTitle')}</h4>
          <div className="mt-3 space-y-2 text-sm text-zinc-300">
            <Link href={`/${locale}`} className="block hover:text-white">{t('footer.privacy')}</Link>
            <Link href={`/${locale}`} className="block hover:text-white">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-7xl border-t border-zinc-800 pt-4 text-xs text-zinc-400">
        {t('footer.copyright')}
      </div>
    </footer>
  )
}

export default Footer