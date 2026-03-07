// components/Reviews.js
'use client'

import { useTranslation } from '../i18n/TranslationProvider'

const Reviews = () => {
  const { t } = useTranslation()

  return (
    <section className="py-12 bg-zinc-200 ">
      <h2 className="text-3xl font-semibold text-center mb-6">{t('reviews.title')}</h2>
      <div className="container mx-auto grid md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p>&ldquo;{t('reviews.review1')}&rdquo;</p>
          <p className="font-semibold">{t('reviews.review1Author')}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p>&ldquo;{t('reviews.review2')}&rdquo;</p>
          <p className="font-semibold">{t('reviews.review2Author')}</p>
        </div>
      </div>
    </section>
  );
};

export default Reviews;