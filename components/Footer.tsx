// components/Footer.tsx
'use client'

import { useTranslation } from '../i18n/TranslationProvider'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-zinc-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p>{t('footer.copyright')}</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;