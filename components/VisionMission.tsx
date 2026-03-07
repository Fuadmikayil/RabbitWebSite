// components/VisionMission.tsx
'use client'

import { useTranslation } from '../i18n/TranslationProvider'

const VisionMission = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="py-12 bg-zinc-200 text-center">
      <h2 className="text-3xl font-semibold mb-6">{t('vision.title')}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold text-xl mb-4">{t('vision.ourVision')}</h3>
          <p>{t('vision.visionText')}</p>
        </div>
        <div>
          <h3 className="font-bold text-xl mb-4">{t('vision.ourMission')}</h3>
          <ul>
            <li>{t('vision.savingRabbits')}</li>
            <li>{t('vision.providingHomes')}</li>
            <li>{t('vision.promotingWelfare')}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;