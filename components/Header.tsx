'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from '../i18n/TranslationProvider'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const { t, locale } = useTranslation()

  return (
    <header className="bg-zinc-900 py-4 w-[80%] mx-auto rounded-full">
      <div className="container mx-auto flex justify-between px-6 items-center">
        <div className="flex rounded-full items-center">
          <Image
            src="/logoLight.png"
            className="rounded-full"
            alt={t('nav.home')}
            width={80}
            height={80}
          />
        </div>

        <nav className="space-x-6">
          <Link href={`/${locale}`} className="text-white hover:text-gray-200">
            {t('nav.home')}
          </Link>
          <div className="relative inline-block">
            <button className="text-white hover:text-gray-200">
              {t('nav.aboutUs')}
            </button>
            <div className="absolute left-0 hidden mt-2 bg-white text-black shadow-lg rounded-lg">
              <Link href={`/${locale}/haqqimizda`} className="block px-4 py-2">
                {t('nav.ourMission')}
              </Link>
              <Link href={`/${locale}/haqqimizda`} className="block px-4 py-2">
                {t('nav.ourTeam')}
              </Link>
            </div>
          </div>
          <div className="relative inline-block">
            <button className="text-white hover:text-gray-200">
              {t('nav.services')}
            </button>
            <div className="absolute left-0 hidden mt-2 bg-white text-black shadow-lg rounded-lg">
              <Link href={`/${locale}/xidmetler`} className="block px-4 py-2">
                {t('nav.rabbitCare')}
              </Link>
              <Link href={`/${locale}/xidmetler`} className="block px-4 py-2">
                {t('nav.adoptionServices')}
              </Link>
            </div>
          </div>
          <div className="relative inline-block">
            <button className="text-white hover:text-gray-200">
              {t('nav.pages')}
            </button>
            <div className="absolute left-0 hidden mt-2 bg-white text-black shadow-lg rounded-lg">
              <Link href={`/${locale}`} className="block px-4 py-2">
                {t('nav.blog')}
              </Link>
              <Link href={`/${locale}`} className="block px-4 py-2">
                {t('nav.testimonials')}
              </Link>
            </div>
          </div>
          <Link href={`/${locale}/elaqe`} className="text-white hover:text-gray-200">
            {t('nav.contactUs')}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <a href="https://wa.me/994707740404" target="_blank" rel="noopener noreferrer">
            <img
              src="/whatsappMain.png"
              className="rounded-full"
              alt="WhatsApp"
              width={60}
              height={60}
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
