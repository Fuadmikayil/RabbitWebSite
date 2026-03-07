export const defaultLocale = 'az'
export const locales = ['az', 'ru', 'en'] as const
export type Locale = (typeof locales)[number]
