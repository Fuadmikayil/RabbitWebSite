// components/VisionMission.tsx
'use client'

import { useTranslation } from '../i18n/TranslationProvider'

const VisionMission = () => {
  const { t } = useTranslation()

  return (
    <section id="about" className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-6 rounded-2xl bg-zinc-100 p-6 md:grid-cols-2 md:gap-8 md:p-8">
        <div className="rounded-xl bg-white p-5 text-left md:p-6">
          <h3 className="text-xl font-bold text-zinc-900 md:text-2xl">{t('vision.ourVision')}</h3>
          <p className="mt-3 text-sm leading-6 text-zinc-600 md:text-base">{t('vision.visionText')}</p>
        </div>
        <div className="rounded-xl bg-white p-5 text-left md:p-6">
          <h3 className="text-xl font-bold text-zinc-900 md:text-2xl">{t('vision.ourMission')}</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 md:text-base">
            <li>- {t('vision.savingRabbits')}</li>
            <li>- {t('vision.providingHomes')}</li>
            <li>- {t('vision.promotingWelfare')}</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default VisionMission