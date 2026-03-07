// components/Team.tsx
'use client'

import { useTranslation } from '../i18n/TranslationProvider'

const Team = () => {
  const { t } = useTranslation()

  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-6">{t('team.title')}</h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-6">
        <div className="text-center">
          <img src="/team1.jpg" alt="Sarah" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h3 className="font-bold">Sarah</h3>
          <p>{t('team.rabbitCareSpecialist')}</p>
        </div>
        <div className="text-center">
          <img src="/team2.jpg" alt="James" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h3 className="font-bold">James</h3>
          <p>{t('team.volunteerCoordinator')}</p>
        </div>
        <div className="text-center">
          <img src="/team3.jpg" alt="Emma" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h3 className="font-bold">Emma</h3>
          <p>{t('team.rabbitTrainer')}</p>
        </div>
      </div>
    </section>
  );
};

export default Team;