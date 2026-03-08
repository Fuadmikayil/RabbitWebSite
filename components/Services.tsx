// components/Services.tsx
'use client'

import { useTranslation } from '../i18n/TranslationProvider'

const Services = () => {
  const { t } = useTranslation()

  const cards = [
    {
      title: t('services.nutritiousFood'),
      desc: t('services.nutritiousFoodDesc'),
    },
    {
      title: t('services.rabbitCare'),
      desc: t('services.rabbitCareDesc'),
    },
    {
      title: t('services.vaccination'),
      desc: t('services.vaccinationDesc'),
    },
  ]

  return (
    <section id="services" className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="text-2xl font-extrabold text-zinc-900 max-[767px]:text-2xl md:text-3xl min-[1025px]:text-4xl">
            {t('services.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 min-[1025px]:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-bold text-zinc-900 md:text-xl">{card.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600 md:text-base">{card.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services