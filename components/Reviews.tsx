// components/Reviews.js
'use client'

import { useTranslation } from '../i18n/TranslationProvider'

const Reviews = () => {
  const { t } = useTranslation()

  return (
    <section className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-8 text-center text-2xl font-extrabold text-zinc-900 md:text-3xl">{t('reviews.title')}</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm leading-6 text-zinc-700 md:text-base">&ldquo;{t('reviews.review1')}&rdquo;</p>
            <p className="mt-3 font-semibold text-zinc-900">{t('reviews.review1Author')}</p>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <p className="text-sm leading-6 text-zinc-700 md:text-base">&ldquo;{t('reviews.review2')}&rdquo;</p>
            <p className="mt-3 font-semibold text-zinc-900">{t('reviews.review2Author')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews