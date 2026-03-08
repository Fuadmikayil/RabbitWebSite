// components/AdoptBunny.tsx
'use client'

import { useTranslation } from '../i18n/TranslationProvider'

const AdoptBunny = () => {
  const { t } = useTranslation()

  return (
    <section className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto w-full max-w-7xl rounded-2xl bg-zinc-100 p-6 text-center md:p-8 min-[1025px]:p-10">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">{t('adopt.title')}</h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <h3 className="text-2xl font-black text-zinc-900">137+</h3>
            <p className="mt-1 text-sm font-medium text-zinc-600">{t('adopt.bunniesLoved')}</p>
          </div>
          <div className="rounded-xl border border-zinc-200 bg-white p-5">
            <h3 className="text-2xl font-black text-zinc-900">262+</h3>
            <p className="mt-1 text-sm font-medium text-zinc-600">{t('adopt.bunniesAdopted')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdoptBunny