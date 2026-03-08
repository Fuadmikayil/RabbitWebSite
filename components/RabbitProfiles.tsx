// components/RabbitProfiles.tsx
'use client'

import { useTranslation } from '../i18n/TranslationProvider'

interface Rabbit {
  id: number;
  name: string;
  breed: string;
  age: number;
  gender: string;
  image: string;
  description: string;
}

const RabbitProfiles = ({ rabbits }: { rabbits: Rabbit[] }) => {
  const { t } = useTranslation()

  if (!rabbits || rabbits.length === 0) {
    return (
      <p className="px-4 py-10 text-center text-sm font-medium text-zinc-600 md:text-base">
        {t('profiles.noRabbits')}
      </p>
    )
  }

  return (
    <section className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="mb-8 text-center text-2xl font-extrabold text-zinc-900 md:mb-10 md:text-3xl">
          {t('profiles.title')}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 min-[1025px]:grid-cols-4">
        {rabbits.map((rabbit) => (
          <article key={rabbit.id} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm md:p-5">
            <img
              src={rabbit.image}
              alt={rabbit.name}
              className="mb-4 h-44 w-full rounded-xl object-cover md:h-48"
            />
            <h3 className="text-lg font-bold text-zinc-900 md:text-xl">{rabbit.name}</h3>
            <p className="mt-1 text-sm text-zinc-600 md:text-base">
              {rabbit.age} {t('profiles.years')} | {rabbit.gender}
            </p>
          </article>
        ))}
        </div>
      </div>
    </section>
  )
}

export default RabbitProfiles