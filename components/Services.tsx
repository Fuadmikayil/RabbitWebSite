// components/Services.tsx
'use client'

import { useTranslation } from '../i18n/TranslationProvider'

const Services = () => {
  const { t } = useTranslation()

  return (
    <section id="services" className="py-12 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">{t('services.title')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="service-item bg-zinc-200 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-3">{t('services.nutritiousFood')}</h3>
            <p>{t('services.nutritiousFoodDesc')}</p>
          </div>
          <div className="service-item bg-zinc-200 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-3">{t('services.rabbitCare')}</h3>
            <p>{t('services.rabbitCareDesc')}</p>
          </div>
          <div className="service-item bg-zinc-200 p-6 rounded-lg">
            <h3 className="font-bold text-xl mb-3">{t('services.vaccination')}</h3>
            <p>{t('services.vaccinationDesc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;