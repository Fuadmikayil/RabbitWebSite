'use client'

import Link from 'next/link'
import rabbits from '../../../data/baza.json'
import { useTranslation } from '../../../i18n/TranslationProvider'

type Rabbit = {
  id: number
  name: string
  breed: string
  age: number
  gender: string
  image: string
  description: string
}

type Product = {
  id: number
  title: string
  image: string
  price: string
}

const products: Product[] = [
  {
    id: 1,
    title: 'Premium Rabbit Food',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=900&q=80',
    price: '$14.99',
  },
  {
    id: 2,
    title: 'Soft Wooden House',
    image: 'https://images.unsplash.com/photo-1610621094309-c8f3f9f64cb3?auto=format&fit=crop&w=900&q=80',
    price: '$39.00',
  },
  {
    id: 3,
    title: 'Daily Care Kit',
    image: 'https://images.unsplash.com/photo-1591561582301-7ce6588cc286?auto=format&fit=crop&w=900&q=80',
    price: '$22.50',
  },
  {
    id: 4,
    title: 'Natural Hay Pack',
    image: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?auto=format&fit=crop&w=900&q=80',
    price: '$11.50',
  },
]

export default function ProductsPage() {
  const { t, locale } = useTranslation()

  return (
    <main className="px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-10 min-[1025px]:pb-20">
      <section className="mx-auto w-full max-w-7xl">
        <div className="rounded-2xl bg-zinc-900 px-6 py-8 text-white md:px-10 md:py-12">
          <h1 className="text-2xl font-extrabold md:text-4xl">{t('products.pageTitle')}</h1>
          <p className="mt-3 max-w-3xl text-sm text-zinc-200 md:text-base">{t('products.pageDescription')}</p>
          <Link
            href={`/${locale}/elaqe`}
            className="mt-6 inline-flex rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-zinc-900 transition hover:bg-amber-300"
          >
            {t('products.cta')}
          </Link>
        </div>
      </section>

      <section className="mx-auto mt-10 w-full max-w-7xl">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">{t('products.rabbitsTitle')}</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 min-[1025px]:grid-cols-4">
          {(rabbits as Rabbit[]).map((rabbit) => (
            <article key={rabbit.id} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
              <img src={rabbit.image} alt={rabbit.name} className="h-48 w-full rounded-xl object-cover" />
              <h3 className="mt-4 text-lg font-bold text-zinc-900">{rabbit.name}</h3>
              <p className="mt-1 text-sm text-zinc-600">{rabbit.breed}</p>
              <p className="mt-2 text-sm text-zinc-500">
                {rabbit.age} {t('profiles.years')} | {rabbit.gender}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-12 w-full max-w-7xl">
        <h2 className="text-2xl font-extrabold text-zinc-900 md:text-3xl">{t('products.shopTitle')}</h2>
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 min-[1025px]:grid-cols-4">
          {products.map((item) => (
            <article key={item.id} className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
              <img src={item.image} alt={item.title} className="h-48 w-full rounded-xl object-cover" />
              <h3 className="mt-4 text-base font-bold text-zinc-900 md:text-lg">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold text-amber-600">{item.price}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
