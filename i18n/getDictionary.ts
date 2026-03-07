import type { Locale } from './settings'

const dictionaries: Record<Locale, () => Promise<Record<string, any>>> = {
  az: () => import('../locales/az/translation.json').then((m) => m.default),
  ru: () => import('../locales/ru/translation.json').then((m) => m.default),
  en: () => import('../locales/en/translation.json').then((m) => m.default),
}

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]?.() ?? dictionaries.az()
}
