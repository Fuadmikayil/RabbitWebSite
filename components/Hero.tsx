// components/Hero.tsx

'use client'

import { useTranslation } from '../i18n/TranslationProvider'

const Hero = () => {
  const { t } = useTranslation()

  return (
    <section className="relative bg-gradient-to-r from-green-400 to-blue-500 text-center py-20">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url(/bg-hero.png)' }}></div>

      <div className="relative z-10">
        <h2 className="text-4xl text-white font-bold mb-4 shadow-md">{t('hero.title')}</h2>
        <p className="text-lg text-white mb-6 max-w-2xl mx-auto">{t('hero.description')}</p>
        
        {/* CTA Button */}
        <button className="bg-white text-black px-8 py-3 rounded-lg shadow-lg hover:bg-gray-200 transition-all">
          {t('hero.readMore')}
        </button>

        {/* Arrow Icon for Scroll Down */}
        <div className="mt-8">
          <a href="#nextSection">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white mx-auto animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 15l7 7 7-7"></path>
              <path d="M12 3v12"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;