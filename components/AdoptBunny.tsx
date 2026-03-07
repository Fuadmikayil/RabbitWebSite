// components/AdoptBunny.tsx
'use client'

import { useTranslation } from '../i18n/TranslationProvider'

const AdoptBunny = () => {
  const { t } = useTranslation()

  return (
    <section className="py-12 bg-zinc-200 text-center">
      <h2 className="text-3xl font-semibold mb-4">{t('adopt.title')}</h2>
      <div className="flex justify-center gap-12 mb-8">
        <div>
          <h3 className="text-xl">137+</h3>
          <p>{t('adopt.bunniesLoved')}</p>
        </div>
        <div>
          <h3 className="text-xl">262+</h3>
          <p>{t('adopt.bunniesAdopted')}</p>
        </div>
      </div>
    </section>
  );
};

export default AdoptBunny;