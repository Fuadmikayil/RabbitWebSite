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
    return <p>{t('profiles.noRabbits')}</p>;
  }

  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-semibold text-center mb-6">{t('profiles.title')}</h2>
      <div className="container mx-auto grid md:grid-cols-4 gap-6">
        {rabbits.map((rabbit) => (
          <div key={rabbit.id} className="bg-zinc-200  p-6 rounded-lg">
            <img
              src={rabbit.image}
              alt={rabbit.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{rabbit.name}</h3>
            <p>{rabbit.age} {t('profiles.years')} | {rabbit.gender}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RabbitProfiles;